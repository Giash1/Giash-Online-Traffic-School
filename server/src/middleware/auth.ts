import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

// Extend Request type to include userId
declare global {
  namespace Express {
    interface Request {
      userId?: string;
      user?: any;
    }
  }
}

interface JwtPayload {
  userId: string;
}

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({ message: 'Access token is required' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    
    // Find user
    const user = await User.findById(decoded.userId).select('-password');
    if (!user) {
      return res.status(401).json({ message: 'Invalid token - user not found' });
    }

    // Check if subscription is active
    if (!user.subscription.isActive || user.subscription.expiresAt < new Date()) {
      return res.status(403).json({ message: 'Subscription has expired' });
    }

    // Add user info to request
    req.userId = user._id.toString();
    req.user = user;
    
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: 'Token has expired' });
    }
    
    console.error('Auth middleware error:', error);
    res.status(500).json({ message: 'Server error in authentication' });
  }
};

// Optional: Role-based access control
export const requireSubscription = (requiredType: 'basic' | 'premium' | 'pro') => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;
    
    const subscriptionHierarchy = { basic: 1, premium: 2, pro: 3 };
    const userLevel = subscriptionHierarchy[user.subscription.type];
    const requiredLevel = subscriptionHierarchy[requiredType];
    
    if (userLevel < requiredLevel) {
      return res.status(403).json({ 
        message: `${requiredType} subscription required`,
        currentSubscription: user.subscription.type
      });
    }
    
    next();
  };
};