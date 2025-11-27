# Swedish Traffic Theory - Complete Implementation Guide

## 📋 Table of Contents
1. [Project Setup](#1-project-setup)
2. [Database Design](#2-database-design)
3. [Backend Implementation](#3-backend-implementation)
4. [Frontend Implementation](#4-frontend-implementation)
5. [Multilingual System](#5-multilingual-system)
6. [MCQ Quiz System](#6-mcq-quiz-system)
7. [Video & Image Integration](#7-video--image-integration)
8. [Testing](#8-testing)
9. [Deployment](#9-deployment)

---

## 1. Project Setup

### Step 1.1: Initialize Repository Structure

```bash
# Create main project folders
mkdir client server database docs

# Navigate to server folder
cd server
npm init -y

# Install backend dependencies
npm install express mongoose dotenv cors bcryptjs jsonwebtoken express-validator
npm install --save-dev typescript @types/express @types/node @types/cors @types/bcryptjs @types/jsonwebtoken ts-node nodemon

# Initialize TypeScript
npx tsc --init

# Navigate to client folder
cd ../client
npx create-react-app . --template typescript

# Install frontend dependencies
npm install axios react-router-dom @tanstack/react-query
npm install --save-dev tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 1.2: Environment Configuration

Create `.env` file in the server folder:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Connection
MONGO_URI=mongodb://localhost:27017/traffic-school
# Or for MongoDB Atlas:
# MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/traffic-school

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_change_in_production
JWT_EXPIRE=7d

# Client URL (for CORS)
CLIENT_URL=http://localhost:3000

# Upload Configuration
MAX_FILE_SIZE=10485760
UPLOAD_PATH=./uploads
```

Create `.env` file in the client folder:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_NAME=Giash Traffic School
```

### Step 1.3: Trello Board Setup

**Trello Columns:**
1. **Backlog** - Future features
2. **To Do** - Ready for development
3. **In Progress** - Currently working
4. **Code Review** - Needs review
5. **Testing** - QA phase
6. **Done** - Completed

**Initial Cards:**
- Setup MongoDB connection
- Create user authentication system
- Build question bank models
- Implement MCQ quiz component
- Add video/image upload
- Create multilingual support
- Build feedback system
- Setup progress tracking

---

## 2. Database Design

### Step 2.1: MongoDB Schema Design

#### User Model (`server/models/User.ts`)

```typescript
import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  preferredLanguage: 'sv' | 'en' | 'bn';
  role: 'student' | 'admin';
  progress: {
    completedLessons: mongoose.Types.ObjectId[];
    quizResults: mongoose.Types.ObjectId[];
  };
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 6,
      select: false,
    },
    preferredLanguage: {
      type: String,
      enum: ['sv', 'en', 'bn'],
      default: 'sv',
    },
    role: {
      type: String,
      enum: ['student', 'admin'],
      default: 'student',
    },
    progress: {
      completedLessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }],
      quizResults: [{ type: Schema.Types.ObjectId, ref: 'QuizResult' }],
    },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('User', UserSchema);
```

#### Question Model (`server/models/Question.ts`)

```typescript
import mongoose, { Document, Schema } from 'mongoose';

interface ITranslation {
  sv: string;
  en: string;
  bn: string;
}

interface IOption {
  id: string;
  text: ITranslation;
  isCorrect: boolean;
}

interface IFeedback {
  correct: ITranslation;
  incorrect: ITranslation;
}

export interface IQuestion extends Document {
  questionText: ITranslation;
  options: IOption[];
  correctAnswer: string;
  explanation: ITranslation;
  feedback: IFeedback;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  media?: {
    type: 'image' | 'video';
    url: string;
    thumbnailUrl?: string;
  };
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const QuestionSchema = new Schema<IQuestion>(
  {
    questionText: {
      sv: { type: String, required: true },
      en: { type: String, required: true },
      bn: { type: String, required: true },
    },
    options: [
      {
        id: { type: String, required: true },
        text: {
          sv: { type: String, required: true },
          en: { type: String, required: true },
          bn: { type: String, required: true },
        },
        isCorrect: { type: Boolean, required: true },
      },
    ],
    correctAnswer: { type: String, required: true },
    explanation: {
      sv: { type: String, required: true },
      en: { type: String, required: true },
      bn: { type: String, required: true },
    },
    feedback: {
      correct: {
        sv: { type: String, default: 'Rätt svar!' },
        en: { type: String, default: 'Correct answer!' },
        bn: { type: String, default: 'সঠিক উত্তর!' },
      },
      incorrect: {
        sv: { type: String, default: 'Fel svar. Försök igen!' },
        en: { type: String, default: 'Wrong answer. Try again!' },
        bn: { type: String, default: 'ভুল উত্তর। আবার চেষ্টা করুন!' },
      },
    },
    category: {
      type: String,
      required: true,
      enum: ['road-signs', 'traffic-rules', 'priority', 'parking', 'safety', 'environment'],
    },
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
      default: 'medium',
    },
    media: {
      type: {
        type: String,
        enum: ['image', 'video'],
      },
      url: String,
      thumbnailUrl: String,
    },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model<IQuestion>('Question', QuestionSchema);
```

#### Lesson Model (`server/models/Lesson.ts`)

```typescript
import mongoose, { Document, Schema } from 'mongoose';

interface ITranslation {
  sv: string;
  en: string;
  bn: string;
}

export interface ILesson extends Document {
  title: ITranslation;
  description: ITranslation;
  content: ITranslation;
  category: string;
  order: number;
  estimatedTime: number; // in minutes
  media?: {
    type: 'image' | 'video';
    url: string;
  }[];
  relatedQuestions: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const LessonSchema = new Schema<ILesson>(
  {
    title: {
      sv: { type: String, required: true },
      en: { type: String, required: true },
      bn: { type: String, required: true },
    },
    description: {
      sv: { type: String, required: true },
      en: { type: String, required: true },
      bn: { type: String, required: true },
    },
    content: {
      sv: { type: String, required: true },
      en: { type: String, required: true },
      bn: { type: String, required: true },
    },
    category: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    estimatedTime: {
      type: Number,
      default: 15,
    },
    media: [
      {
        type: {
          type: String,
          enum: ['image', 'video'],
        },
        url: String,
      },
    ],
    relatedQuestions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  },
  { timestamps: true }
);

export default mongoose.model<ILesson>('Lesson', LessonSchema);
```

#### QuizResult Model (`server/models/QuizResult.ts`)

```typescript
import mongoose, { Document, Schema } from 'mongoose';

interface IAnswer {
  questionId: mongoose.Types.ObjectId;
  selectedAnswer: string;
  isCorrect: boolean;
  timeSpent: number; // in seconds
}

export interface IQuizResult extends Document {
  userId: mongoose.Types.ObjectId;
  quizType: 'practice' | 'mock-exam' | 'category';
  category?: string;
  answers: IAnswer[];
  score: number;
  totalQuestions: number;
  percentageScore: number;
  passed: boolean;
  timeSpent: number;
  completedAt: Date;
}

const QuizResultSchema = new Schema<IQuizResult>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    quizType: {
      type: String,
      enum: ['practice', 'mock-exam', 'category'],
      required: true,
    },
    category: String,
    answers: [
      {
        questionId: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
        selectedAnswer: { type: String, required: true },
        isCorrect: { type: Boolean, required: true },
        timeSpent: { type: Number, default: 0 },
      },
    ],
    score: {
      type: Number,
      required: true,
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
    percentageScore: {
      type: Number,
      required: true,
    },
    passed: {
      type: Boolean,
      default: false,
    },
    timeSpent: {
      type: Number,
      required: true,
    },
    completedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IQuizResult>('QuizResult', QuizResultSchema);
```

---

## 3. Backend Implementation

### Step 3.1: Server Configuration (`server/server.ts`)

```typescript
import express, { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config();

const app: Application = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files for uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
import authRoutes from './routes/auth';
import questionRoutes from './routes/questions';
import lessonRoutes from './routes/lessons';
import quizRoutes from './routes/quiz';
import userRoutes from './routes/users';

app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/users', userRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('✅ MongoDB Connected Successfully');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error);
    process.exit(1);
  }
};

// Start Server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 API: http://localhost:${PORT}/api`);
  });
});
```

### Step 3.2: Authentication Middleware (`server/middleware/auth.ts`)

```typescript
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User';

interface AuthRequest extends Request {
  user?: IUser;
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route',
    });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid token',
    });
  }
};

export const authorize = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'User role not authorized',
      });
    }
    next();
  };
};
```

### Step 3.3: Auth Controller (`server/controllers/authController.ts`)

```typescript
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

// Generate JWT Token
const generateToken = (id: string): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRE || '7d',
  });
};

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, preferredLanguage } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: 'User already exists',
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      preferredLanguage: preferredLanguage || 'sv',
    });

    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        preferredLanguage: user.preferredLanguage,
        token: generateToken(user._id.toString()),
      },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Check for user
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    res.json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        preferredLanguage: user.preferredLanguage,
        role: user.role,
        token: generateToken(user._id.toString()),
      },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req: any, res: Response) => {
  try {
    const user = await User.findById(req.user._id).populate('progress.completedLessons');

    res.json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
```

### Step 3.4: Question Controller (`server/controllers/questionController.ts`)

```typescript
import { Request, Response } from 'express';
import Question from '../models/Question';

// @desc    Get all questions
// @route   GET /api/questions
// @access  Private
export const getQuestions = async (req: Request, res: Response) => {
  try {
    const { category, difficulty, limit } = req.query;

    const filter: any = {};
    if (category) filter.category = category;
    if (difficulty) filter.difficulty = difficulty;

    const questions = await Question.find(filter)
      .limit(limit ? parseInt(limit as string) : 0)
      .select('-__v');

    res.json({
      success: true,
      count: questions.length,
      data: questions,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get random questions for quiz
// @route   GET /api/questions/random
// @access  Private
export const getRandomQuestions = async (req: Request, res: Response) => {
  try {
    const { count = 10, category } = req.query;

    const filter: any = {};
    if (category) filter.category = category;

    const questions = await Question.aggregate([
      { $match: filter },
      { $sample: { size: parseInt(count as string) } },
    ]);

    res.json({
      success: true,
      count: questions.length,
      data: questions,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Create question (Admin only)
// @route   POST /api/questions
// @access  Private/Admin
export const createQuestion = async (req: Request, res: Response) => {
  try {
    const question = await Question.create(req.body);

    res.status(201).json({
      success: true,
      data: question,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update question
// @route   PUT /api/questions/:id
// @access  Private/Admin
export const updateQuestion = async (req: Request, res: Response) => {
  try {
    const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!question) {
      return res.status(404).json({
        success: false,
        message: 'Question not found',
      });
    }

    res.json({
      success: true,
      data: question,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Delete question
// @route   DELETE /api/questions/:id
// @access  Private/Admin
export const deleteQuestion = async (req: Request, res: Response) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);

    if (!question) {
      return res.status(404).json({
        success: false,
        message: 'Question not found',
      });
    }

    res.json({
      success: true,
      message: 'Question deleted successfully',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
```

### Step 3.5: Quiz Controller (`server/controllers/quizController.ts`)

```typescript
import { Request, Response } from 'express';
import QuizResult from '../models/QuizResult';
import Question from '../models/Question';
import User from '../models/User';

// @desc    Submit quiz answers
// @route   POST /api/quiz/submit
// @access  Private
export const submitQuiz = async (req: any, res: Response) => {
  try {
    const { quizType, category, answers, timeSpent } = req.body;
    const userId = req.user._id;

    // Calculate score
    let correctCount = 0;
    const processedAnswers = [];

    for (const answer of answers) {
      const question = await Question.findById(answer.questionId);
      if (!question) continue;

      const isCorrect = answer.selectedAnswer === question.correctAnswer;
      if (isCorrect) correctCount++;

      processedAnswers.push({
        questionId: answer.questionId,
        selectedAnswer: answer.selectedAnswer,
        isCorrect,
        timeSpent: answer.timeSpent || 0,
      });
    }

    const totalQuestions = processedAnswers.length;
    const percentageScore = (correctCount / totalQuestions) * 100;
    const passed = percentageScore >= 70; // 70% passing score

    // Create quiz result
    const quizResult = await QuizResult.create({
      userId,
      quizType,
      category,
      answers: processedAnswers,
      score: correctCount,
      totalQuestions,
      percentageScore,
      passed,
      timeSpent,
    });

    // Update user progress
    await User.findByIdAndUpdate(userId, {
      $push: { 'progress.quizResults': quizResult._id },
    });

    res.status(201).json({
      success: true,
      data: quizResult,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get user quiz results
// @route   GET /api/quiz/results
// @access  Private
export const getUserResults = async (req: any, res: Response) => {
  try {
    const userId = req.user._id;

    const results = await QuizResult.find({ userId })
      .populate('answers.questionId')
      .sort({ completedAt: -1 });

    res.json({
      success: true,
      count: results.length,
      data: results,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get quiz statistics
// @route   GET /api/quiz/stats
// @access  Private
export const getQuizStats = async (req: any, res: Response) => {
  try {
    const userId = req.user._id;

    const stats = await QuizResult.aggregate([
      { $match: { userId } },
      {
        $group: {
          _id: '$category',
          averageScore: { $avg: '$percentageScore' },
          totalQuizzes: { $sum: 1 },
          passedQuizzes: {
            $sum: { $cond: ['$passed', 1, 0] },
          },
        },
      },
    ]);

    res.json({
      success: true,
      data: stats,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
```

---

## 4. Frontend Implementation

### Step 4.1: React App Structure

```
client/src/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Loader.tsx
│   │   └── Navbar.tsx
│   ├── quiz/
│   │   ├── QuestionCard.tsx
│   │   ├── FeedbackModal.tsx
│   │   ├── QuizTimer.tsx
│   │   └── ResultSummary.tsx
│   ├── lessons/
│   │   ├── LessonCard.tsx
│   │   └── LessonContent.tsx
│   └── auth/
│       ├── LoginForm.tsx
│       └── RegisterForm.tsx
├── pages/
│   ├── Home.tsx
│   ├── Dashboard.tsx
│   ├── Quiz.tsx
│   ├── MockExam.tsx
│   ├── Lessons.tsx
│   ├── LessonDetail.tsx
│   └── Results.tsx
├── context/
│   ├── AuthContext.tsx
│   └── LanguageContext.tsx
├── hooks/
│   ├── useAuth.ts
│   ├── useQuiz.ts
│   └── useLanguage.ts
├── services/
│   ├── api.ts
│   ├── authService.ts
│   ├── quizService.ts
│   └── lessonService.ts
├── types/
│   └── index.ts
├── utils/
│   ├── translations.ts
│   └── helpers.ts
└── App.tsx
```

### Step 4.2: Type Definitions (`client/src/types/index.ts`)

```typescript
export interface User {
  id: string;
  name: string;
  email: string;
  preferredLanguage: 'sv' | 'en' | 'bn';
  role: 'student' | 'admin';
  progress: {
    completedLessons: string[];
    quizResults: string[];
  };
}

export interface Translation {
  sv: string;
  en: string;
  bn: string;
}

export interface QuestionOption {
  id: string;
  text: Translation;
  isCorrect: boolean;
}

export interface Question {
  _id: string;
  questionText: Translation;
  options: QuestionOption[];
  correctAnswer: string;
  explanation: Translation;
  feedback: {
    correct: Translation;
    incorrect: Translation;
  };
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  media?: {
    type: 'image' | 'video';
    url: string;
    thumbnailUrl?: string;
  };
  tags: string[];
}

export interface QuizAnswer {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  timeSpent: number;
}

export interface QuizResult {
  _id: string;
  userId: string;
  quizType: 'practice' | 'mock-exam' | 'category';
  category?: string;
  answers: QuizAnswer[];
  score: number;
  totalQuestions: number;
  percentageScore: number;
  passed: boolean;
  timeSpent: number;
  completedAt: Date;
}

export interface Lesson {
  _id: string;
  title: Translation;
  description: Translation;
  content: Translation;
  category: string;
  order: number;
  estimatedTime: number;
  media?: {
    type: 'image' | 'video';
    url: string;
  }[];
  relatedQuestions: string[];
}
```

### Step 4.3: Language Context (`client/src/context/LanguageContext.tsx`)

```typescript
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'sv' | 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (translations: { sv: string; en: string; bn: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sv');

  const t = (translations: { sv: string; en: string; bn: string }): string => {
    return translations[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
```

### Step 4.4: Question Card Component (`client/src/components/quiz/QuestionCard.tsx`)

```typescript
import React, { useState } from 'react';
import { Question } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import FeedbackModal from './FeedbackModal';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  onAnswer: (answerId: string, isCorrect: boolean) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  onAnswer,
}) => {
  const { t } = useLanguage();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerSelect = (optionId: string) => {
    const option = question.options.find((opt) => opt.id === optionId);
    if (!option) return;

    setSelectedAnswer(optionId);
    setIsCorrect(option.isCorrect);
    setShowFeedback(true);
  };

  const handleContinue = () => {
    if (selectedAnswer) {
      onAnswer(selectedAnswer, isCorrect);
      setShowFeedback(false);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
      {/* Question Number */}
      <div className="mb-4">
        <span className="text-sm font-semibold text-blue-600">
          {t({ sv: 'Fråga', en: 'Question', bn: 'প্রশ্ন' })} {questionNumber}
        </span>
      </div>

      {/* Media (Image or Video) */}
      {question.media && (
        <div className="mb-6">
          {question.media.type === 'image' ? (
            <img
              src={question.media.url}
              alt="Question media"
              className="w-full h-64 object-cover rounded-lg"
            />
          ) : (
            <video
              src={question.media.url}
              controls
              poster={question.media.thumbnailUrl}
              className="w-full h-64 rounded-lg"
            />
          )}
        </div>
      )}

      {/* Question Text */}
      <h2 className="text-xl font-bold mb-6 text-gray-800">
        {t(question.questionText)}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleAnswerSelect(option.id)}
            disabled={selectedAnswer !== null}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
              selectedAnswer === option.id
                ? isCorrect
                  ? 'border-green-500 bg-green-50'
                  : 'border-red-500 bg-red-50'
                : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
            } ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <span className="font-medium">{t(option.text)}</span>
          </button>
        ))}
      </div>

      {/* Feedback Modal */}
      {showFeedback && (
        <FeedbackModal
          isCorrect={isCorrect}
          feedback={isCorrect ? question.feedback.correct : question.feedback.incorrect}
          explanation={question.explanation}
          correctAnswer={question.options.find((opt) => opt.isCorrect)!.text}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
};

export default QuestionCard;
```

### Step 4.5: Feedback Modal (`client/src/components/quiz/FeedbackModal.tsx`)

```typescript
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Translation } from '../../types';

interface FeedbackModalProps {
  isCorrect: boolean;
  feedback: Translation;
  explanation: Translation;
  correctAnswer: Translation;
  onContinue: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isCorrect,
  feedback,
  explanation,
  correctAnswer,
  onContinue,
}) => {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-lg p-8 max-w-md mx-4 ${
          isCorrect ? 'border-t-4 border-green-500' : 'border-t-4 border-red-500'
        }`}
      >
        {/* Icon and Title */}
        <div className="text-center mb-6">
          {isCorrect ? (
            <div className="text-green-500 text-6xl mb-4">✓</div>
          ) : (
            <div className="text-red-500 text-6xl mb-4">✗</div>
          )}
          <h3
            className={`text-2xl font-bold ${
              isCorrect ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {t(feedback)}
          </h3>
        </div>

        {/* Explanation */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">
            {t({ sv: 'Förklaring:', en: 'Explanation:', bn: 'ব্যাখ্যা:' })}
          </h4>
          <p className="text-gray-600">{t(explanation)}</p>
        </div>

        {/* Correct Answer (shown only if wrong) */}
        {!isCorrect && (
          <div className="mb-6 bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-700 mb-2">
              {t({ sv: 'Rätt svar:', en: 'Correct Answer:', bn: 'সঠিক উত্তর:' })}
            </h4>
            <p className="text-green-600 font-medium">{t(correctAnswer)}</p>
          </div>
        )}

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className={`w-full py-3 rounded-lg text-white font-semibold ${
            isCorrect
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-red-500 hover:bg-red-600'
          } transition-colors`}
        >
          {t({ sv: 'Fortsätt', en: 'Continue', bn: 'চালিয়ে যান' })}
        </button>
      </div>
    </div>
  );
};

export default FeedbackModal;
```

---

## 5. Multilingual System

### Step 5.1: Translation Files

Create `client/src/utils/translations.ts`:

```typescript
export const translations = {
  // Navigation
  home: { sv: 'Hem', en: 'Home', bn: 'হোম' },
  lessons: { sv: 'Lektioner', en: 'Lessons', bn: 'পাঠ' },
  quiz: { sv: 'Quiz', en: 'Quiz', bn: 'কুইজ' },
  mockExam: { sv: 'Provexamen', en: 'Mock Exam', bn: 'মক পরীক্ষা' },
  dashboard: { sv: 'Instrumentpanel', en: 'Dashboard', bn: 'ড্যাশবোর্ড' },
  logout: { sv: 'Logga ut', en: 'Logout', bn: 'লগআউট' },

  // Quiz
  startQuiz: { sv: 'Starta Quiz', en: 'Start Quiz', bn: 'কুইজ শুরু করুন' },
  submitAnswer: { sv: 'Skicka svar', en: 'Submit Answer', bn: 'উত্তর জমা দিন' },
  nextQuestion: { sv: 'Nästa fråga', en: 'Next Question', bn: 'পরবর্তী প্রশ্ন' },
  finishQuiz: { sv: 'Avsluta Quiz', en: 'Finish Quiz', bn: 'কুইজ শেষ করুন' },

  // Results
  yourScore: { sv: 'Din poäng', en: 'Your Score', bn: 'আপনার স্কোর' },
  passed: { sv: 'Godkänd!', en: 'Passed!', bn: 'পাস!' },
  failed: { sv: 'Underkänd', en: 'Failed', bn: 'ফেল' },
  tryAgain: { sv: 'Försök igen', en: 'Try Again', bn: 'আবার চেষ্টা করুন' },

  // Categories
  roadSigns: { sv: 'Vägskyltar', en: 'Road Signs', bn: 'সড়ক চিহ্ন' },
  trafficRules: { sv: 'Trafikregler', en: 'Traffic Rules', bn: 'ট্রাফিক নিয়ম' },
  priority: { sv: 'Företräde', en: 'Priority', bn: 'অগ্রাধিকার' },
  parking: { sv: 'Parkering', en: 'Parking', bn: 'পার্কিং' },
  safety: { sv: 'Säkerhet', en: 'Safety', bn: 'নিরাপত্তা' },
  environment: { sv: 'Miljö', en: 'Environment', bn: 'পরিবেশ' },

  // Common
  loading: { sv: 'Laddar...', en: 'Loading...', bn: 'লোড হচ্ছে...' },
  error: { sv: 'Fel', en: 'Error', bn: 'ত্রুটি' },
  success: { sv: 'Framgång', en: 'Success', bn: 'সফলতা' },
  cancel: { sv: 'Avbryt', en: 'Cancel', bn: 'বাতিল' },
  save: { sv: 'Spara', en: 'Save', bn: 'সংরক্ষণ' },
};
```

---

## 6. MCQ Quiz System

### Step 6.1: Quiz Page (`client/src/pages/Quiz.tsx`)

```typescript
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionCard from '../components/quiz/QuestionCard';
import { Question } from '../types';
import { getRandomQuestions, submitQuiz } from '../services/quizService';
import { useLanguage } from '../context/LanguageContext';

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [startTime] = useState(Date.now());
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const data = await getRandomQuestions(10);
      setQuestions(data);
    } catch (error) {
      console.error('Error loading questions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (answerId: string, isCorrect: boolean) => {
    const answer = {
      questionId: questions[currentQuestionIndex]._id,
      selectedAnswer: answerId,
      isCorrect,
      timeSpent: 0,
    };

    setAnswers([...answers, answer]);

    // Move to next question or finish
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleFinishQuiz([...answers, answer]);
    }
  };

  const handleFinishQuiz = async (finalAnswers: any[]) => {
    const totalTime = Math.floor((Date.now() - startTime) / 1000);

    try {
      const result = await submitQuiz({
        quizType: 'practice',
        answers: finalAnswers,
        timeSpent: totalTime,
      });

      navigate('/results', { state: { result } });
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl">{t({ sv: 'Laddar...', en: 'Loading...', bn: 'লোড হচ্ছে...' })}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{
                width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
          <p className="text-center mt-2 text-gray-600">
            {currentQuestionIndex + 1} / {questions.length}
          </p>
        </div>

        {/* Question Card */}
        {questions[currentQuestionIndex] && (
          <QuestionCard
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            onAnswer={handleAnswer}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
```

---

## 7. Video & Image Integration

### Step 7.1: File Upload Configuration

Create multer middleware for handling uploads (`server/middleware/upload.ts`):

```typescript
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Ensure upload directory exists
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = file.mimetype.startsWith('video') ? 'videos' : 'images';
    const dir = path.join(uploadDir, folder);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

// File filter
const fileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedTypes = /jpeg|jpg|png|gif|mp4|webm|ogg/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Only images and videos are allowed'));
  }
};

export const upload = multer({
  storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE || '10485760'), // 10MB default
  },
  fileFilter,
});
```

### Step 7.2: Media Display Component

```typescript
import React from 'react';

interface MediaDisplayProps {
  type: 'image' | 'video';
  url: string;
  thumbnailUrl?: string;
  alt?: string;
}

const MediaDisplay: React.FC<MediaDisplayProps> = ({ type, url, thumbnailUrl, alt }) => {
  return (
    <div className="mb-6 rounded-lg overflow-hidden">
      {type === 'image' ? (
        <img
          src={url}
          alt={alt || 'Media content'}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
      ) : (
        <video
          src={url}
          controls
          poster={thumbnailUrl}
          className="w-full h-64"
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default MediaDisplay;
```

---

## 8. Testing

### Step 8.1: Install Testing Dependencies

```bash
# Backend testing
cd server
npm install --save-dev jest @types/jest ts-jest supertest @types/supertest

# Frontend testing
cd ../client
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

### Step 8.2: Sample Test (Backend)

```typescript
// server/__tests__/auth.test.ts
import request from 'supertest';
import app from '../server';

describe('Auth Endpoints', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
        preferredLanguage: 'sv',
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('token');
  });
});
```

---

## 9. Deployment

### Step 9.1: MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create database user
4. Whitelist IP address (0.0.0.0/0 for testing)
5. Get connection string
6. Update `.env` with connection string

### Step 9.2: Deploy Backend (Render/Railway)

**For Render:**
1. Create account on [Render](https://render.com)
2. Connect GitHub repository
3. Create new Web Service
4. Set environment variables
5. Deploy

**build command:** `npm install && npm run build`
**start command:** `npm start`

### Step 9.3: Deploy Frontend (Vercel/Netlify)

**For Vercel:**
```bash
npm install -g vercel
cd client
vercel
```

**For Netlify:**
```bash
npm install -g netlify-cli
cd client
npm run build
netlify deploy --prod
```

---

## 🎯 Next Steps

1. **Week 1-2:** Setup project structure, MongoDB, and basic backend
2. **Week 3-4:** Build authentication and question management
3. **Week 5-6:** Create frontend components and quiz system
4. **Week 7-8:** Add multilingual support and media integration
5. **Week 9-10:** Testing, refinement, and deployment

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Good luck with your project! 🚀**
