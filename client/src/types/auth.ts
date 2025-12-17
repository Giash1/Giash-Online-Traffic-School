export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  subscription: {
    type: 'basic' | 'premium' | 'pro';
    expiresAt: Date;
    isActive: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string;
  subscriptionType: 'basic' | 'premium' | 'pro';
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface AuthContextType extends AuthState {
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
}