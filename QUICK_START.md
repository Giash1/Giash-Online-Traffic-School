# Quick Start Guide - Swedish Traffic School
cd .\client
npm run dev (for browser)

cd .\server
pm run dev (for backend)

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas account)
- Git
- Code editor (VS Code recommended)

---

## Step 1: Clone and Setup

```powershell
# Navigate to your project directory
cd c:\Users\giash\OneDrive\Documents\Giash-Online-Traffic-School

# Initialize Git (if not already done)
git init
```

---

## Step 2: Backend Setup

```powershell
# Create and setup server folder
mkdir server
cd server

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express mongoose dotenv cors bcryptjs jsonwebtoken express-validator multer
npm install --save-dev typescript @types/express @types/node @types/cors @types/bcryptjs @types/jsonwebtoken @types/multer ts-node nodemon

# Initialize TypeScript
npx tsc --init
```

### Create `server/package.json` scripts:

```json
{
  "scripts": {
    "dev": "nodemon --exec ts-node src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  }
}
```

### Create `server/tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### Create `.env` file in server folder:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/traffic-school
JWT_SECRET=your_secret_key_change_this_in_production
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:3000
MAX_FILE_SIZE=10485760
UPLOAD_PATH=./uploads
```

---

## Step 3: Frontend Setup

```powershell
# Go back to project root
cd ..

# Create client folder and initialize
mkdir client
cd client
npm init -y

# Install React and TypeScript dependencies
npm install react react-dom react-scripts typescript @types/react @types/react-dom @types/node web-vitals

###### Install additional dependencies
# Install Vite and React plugin (needed for building)
npm install --save-dev vite @vitejs/plugin-react

# Install additional dependencies
npm install axios react-router-dom @tanstack/react-query

# Install Tailwind CSS and related packages
npm install --save-dev tailwindcss postcss autoprefixer

# Initialize Tailwind CSS
npx tailwindcss init -p

____What each package does:
vite - Fast build tool and dev server
@vitejs/plugin-react - Vite plugin for React
axios - For making HTTP requests to my backend API
react-router-dom - For navigation between pages
@tanstack/react-query - For managing server state and data fetching
tailwindcss - CSS framework for styling
postcss - Tool for transforming CSS
autoprefixer - Adds vendor prefixes to CSS automatically
```

### Step 3.1: Update package.json Scripts

Open `client/package.json` and update the `"scripts"` section:

```powershell
# Open package.json in your editor
notepad package.json
# or use VS Code
code package.json
```

Replace the `"scripts"` section with:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview"
}
```

### Step 3.2: Configure Tailwind CSS

If `tailwind.config.js` wasn't created, create it manually:

```powershell
# Create tailwind.config.js manually
New-Item -Path tailwind.config.js -ItemType File
notepad tailwind.config.js
```

Add this content to `client/tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Also create `postcss.config.js`:

```powershell
New-Item -Path postcss.config.js -ItemType File
notepad postcss.config.js
```

Add this content:

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Step 3.3: Create React Files

Create the main HTML file `client/index.html`:

```powershell
New-Item -Path index.html -ItemType File
notepad index.html
```

Add this content:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Giash Online Traffic School</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Create `client/src/main.tsx`:

```powershell
mkdir src
cd src
New-Item -Path main.tsx -ItemType File
notepad main.tsx
```

Add this content:

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

Create `client/src/App.tsx`:

```powershell
New-Item -Path App.tsx -ItemType File
notepad App.tsx
```

Add this content:

```typescript
import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          🚗 Giash Traffic School
        </h1>
        <p className="text-xl text-gray-700">
          Swedish Traffic Theory Learning Platform
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Svenska | English | বাংলা
        </p>
      </div>
    </div>
  )
}

export default App
```

Create `client/src/index.css`:

```powershell
New-Item -Path index.css -ItemType File
notepad index.css
```

Add this content:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**Optional - To remove yellow warnings in index.css:**

Create `.vscode/settings.json` in project root:

```powershell
cd ../..
mkdir .vscode
cd .vscode
New-Item -Path settings.json -ItemType File
notepad settings.json
```

Add this content:

```json
{
  "css.lint.unknownAtRules": "ignore"
}
```

---

### Step 3.4: Create TypeScript Configuration Files

Create `client/tsconfig.json`:

```powershell
cd ..
New-Item -Path tsconfig.json -ItemType File
notepad tsconfig.json
```

Add this content:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

Create `client/tsconfig.node.json`:

```powershell
New-Item -Path tsconfig.node.json -ItemType File
notepad tsconfig.node.json
```

Add this content:

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

### Step 3.5: Create Vite Configuration

Create `client/vite.config.ts`:

```powershell
New-Item -Path vite.config.ts -ItemType File
notepad vite.config.ts
```

Add this content:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})
```

### Step 3.6: Create `.env` file

Create `.env` file in client folder:

```powershell
New-Item -Path .env -ItemType File
notepad .env
```

Add this content:

```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Giash Traffic School
```

**Note:** With Vite, environment variables must start with `VITE_` (not `REACT_APP_`)

---

## Step 4: Create Basic Folder Structure

### 4.1 Server Structure

```powershell
# Navigate to server folder
cd server

# Create src folder and subfolders
mkdir src
cd src
mkdir config, controllers, models, routes, middleware, utils
```

### 4.2 Client Structure

```powershell
# Navigate to client src folder
cd ../../client/src

# Create subfolders
mkdir components, pages, context, hooks, services, types, utils
mkdir components/common, components/quiz, components/lessons, components/auth
```

---

## Step 5: Install MongoDB

### Option A: Local MongoDB (Windows)

1. Download from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
2. Install MongoDB Community Server
3. MongoDB will run on `mongodb://localhost:27017`

### Option B: MongoDB Atlas (Cloud - Recommended)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create cluster (select free tier)
4. Create database user (Database Access)
5. Whitelist IP: `0.0.0.0/0` (Network Access)
6. Get connection string (Connect → Drivers)
7. Update `server/.env` MONGO_URI with your connection string

Example:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/traffic-school?retryWrites=true&w=majority
```

---

## Step 6: Run the Application

### Terminal 1 - Start Backend:

```powershell
cd server
npm run dev
```

You should see:
```
✅ MongoDB Connected Successfully
🚀 Server running on port 5000
📍 API: http://localhost:5000/api
```

### Terminal 2 - Start Frontend:

```powershell
cd client
npm start
```

Browser will open at `http://localhost:3000`

---


## Step 7: Test the Setup

### Test Backend API:

Open browser or Postman and visit:
```
http://localhost:5000/api/health
```

Should return:
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

---

## Step 8: Create First Admin User (Optional)

You can use Postman or create a simple registration form:

**POST** `http://localhost:5000/api/auth/register`

**Body (JSON):**
```json
{
  "name": "Admin User",
  "email": "admin@traffic.com",
  "password": "admin123",
  "preferredLanguage": "sv"
}
```

---

## Step 9: UI/UX Design & Layout Structure

### 🖥️ Overall Application Layout

```
┌────────────────────────────────────────────┐
│         TOP NAVIGATION BAR (Sticky)        │
├─────────────┬──────────────────────────────┤
│             │                              │
│  SIDEBAR    │    MAIN CONTENT AREA        │
│   MENU      │    (Dynamic Pages)          │
│             │                              │
│             │                              │
└─────────────┴──────────────────────────────┘
│              FOOTER (Minimal)               │
└────────────────────────────────────────────┘
```

---

### 🔹 Step 9.1: Top Navigation Bar (Sticky Header)

**Features:**
- Logo/Branding (Left)
- Progress Bar (Center) - "Lesson 3 of 10"
- Notifications 🔔, Profile 👤, Dark/Light Mode 🌙 (Right)

**Implementation:**
```powershell
# Create TopNav component
cd client/src/components/common
New-Item -Path TopNav.tsx -ItemType File
```

**Responsibilities:**
- Display user profile
- Show learning progress
- Toggle theme
- Notification center

---

### 🔹 Step 9.2: Left Sidebar Navigation

**Menu Items:**
- 📘 Dashboard
- 🧠 IQ Questions
- 📖 Theory Lessons
- 🚦 Traffic Signs
- 📝 Practice Tests
- 🏆 Final Test
- 📊 Results & Certificates

**Stats Box (Bottom):**
- Accuracy: 78%
- Tests Completed: 12
- Ready for Exam: ✅ Yes

**Implementation:**
```powershell
cd client/src/components/common
New-Item -Path Sidebar.tsx -ItemType File
```

---

### 🔹 Step 9.3: Main Content Area (Dynamic Pages)

#### **Page 1: IQ Question Page**

```
┌─────────────────────────────────────┐
│  🧠 IQ Question 5/20                │
├─────────────────────────────────────┤
│                                     │
│  Question:                          │
│  "If you see this sign while        │
│   driving, what should you do?"    │
│                                     │
│  [ Image / Diagram ]                │
│                                     │
│  ☐ Slow down                        │
│  ☐ Stop completely                  │
│  ☐ Overtake carefully               │
│  ☐ Ignore the sign                  │
│                                     │
│  [⏭ Next] [💡 Hint]                 │
└─────────────────────────────────────┘
```

---

#### **Page 2: Answer & Explanation (After Submit)**

```
┌─────────────────────────────────────┐
│  ✅ CORRECT ANSWER                  │
│  "Stop completely"                  │
├─────────────────────────────────────┤
│  Explanation:                       │
│  This sign indicates mandatory      │
│  stopping due to traffic control    │
│  or danger ahead. Failing to stop   │
│  may cause accidents or fines.      │
│                                     │
│  📌 Related Rule                    │
│  📷 Similar Signs                   │
│                                     │
│  [⏭ Next Question]                  │
└─────────────────────────────────────┘
```

---

#### **Page 3: Theory Lesson Page**

```
┌─────────────────────────────────────┐
│  Split Layout:                      │
├──────────────┬──────────────────────┤
│              │                      │
│  Content     │  Sticky Panel        │
│  (Scroll)    │  - Key Points        │
│              │  - Common Mistakes   │
│  📘 Lesson   │  - Mini Quiz (3 Q's) │
│  Title       │                      │
│              │                      │
│  • Bullet    │                      │
│    points    │                      │
│  • Icons     │                      │
│  • Diagrams  │                      │
│              │                      │
└──────────────┴──────────────────────┘
```

---

#### **Page 4: Practice Test Mode**

```
┌──────────────────────────────────────┐
│  ⏱ 28:45 | Question: 12 / 65 | 🚩   │
├──────────────────────────────────────┤
│  [Question with 4 options]           │
│                                      │
│  [Previous] [Next] [Submit Test]    │
└──────────────────────────────────────┘
```

**Features:**
- Countdown timer
- Question counter
- Flag for review later
- Navigation buttons

---

#### **Page 5: Final Test (STRICT MODE)**

```
┌──────────────────────────────────────┐
│  🚨 EXAM MODE - RULES               │
│  ❌ No back navigation               │
│  ⏱ Timed (90 min)                    │
│  📌 One attempt only                 │
│  💾 Auto-save answers               │
├──────────────────────────────────────┤
│  [Exam Questions]                    │
│  [Submit Test Button - FINAL]        │
└──────────────────────────────────────┘
```

---

#### **Page 6: Test Results**

```
┌──────────────────────────────────────┐
│  🎉 TEST COMPLETED                  │
├──────────────────────────────────────┤
│  Score: 52 / 65                      │
│  Status: ✅ PASS                     │
│                                      │
│  [📥 Download Certificate]           │
│  [🔍 Review Mistakes]                │
│  [📊 View Analytics]                 │
└──────────────────────────────────────┘
```

---

### 🔹 Step 9.4: Results & Analytics Dashboard

**Displays:**
- 📊 Topic-wise accuracy (chart)
- 📉 Weak areas (highlighted)
- 📈 Progress over time
- 📌 AI Recommendations: "Revise Traffic Signs – Priority Rules"

---

### 🔹 Step 9.5: Footer

```
© 2025 Giash Online Traffic School | Privacy | Terms | Contact
```

---

### 🎨 Step 9.6: Design Style Guide

#### **Color Palette**
- **Primary**: Blue (#2563EB) - Trust, professionalism
- **Success**: Green (#10B981) - Correct answers
- **Error**: Red (#EF4444) - Wrong answers
- **Warning**: Orange (#F59E0B) - Hints, notifications
- **Background**: White (#FFFFFF) - Clean, minimal
- **Text**: Dark Gray (#374151) - High readability

#### **Typography**
- **Headings**: Poppins or Inter (Bold, 24px-32px)
- **Body Text**: Roboto (Regular, 14px-16px)
- **Small Text**: Roboto (Light, 12px)

#### **Spacing & Rounded Corners**
- Card Border Radius: 12-16px
- Padding: 16px (cards), 24px (pages)
- Gap between elements: 8-12px

#### **Animations**
- Hover effects: 200ms ease-in-out
- Progress bar: Smooth transitions
- Page transitions: Fade in/out (300ms)
- Button feedback: Scale (1.02) on hover

---

### 🏫 Step 9.7: Add School Logo

**Logo Location:** `client/src/assets/logo.svg` or `logo.png`

**Create folder:**
```powershell
cd client/src
mkdir assets
mkdir assets/images
mkdir assets/icons
```

**Add Logo File:**
1. Save your school logo as `logo.svg` or `logo.png`
2. Place it in `client/src/assets/images/`
3. Import in TopNav component:
   ```typescript
   import logo from '@/assets/images/logo.svg'
   ```

---

### 📱 Step 9.8: Mobile Responsiveness

**Breakpoints:**
- Mobile: < 640px (Sidebar collapses to hamburger menu)
- Tablet: 640px - 1024px (Sidebar toggleable)
- Desktop: > 1024px (Full layout)

**Mobile Changes:**
- Stack layout (remove two-column)
- Smaller fonts
- Touch-friendly buttons (44px min height)
- Hamburger menu for navigation

---

## 📁 Your Project Structure Should Look Like:

```
Giash-Online-Traffic-School/
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── server.ts
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── .env
│   ├── package.json
│   └── tailwind.config.js
├── database/
├── docs/
├── .gitignore
├── README.md
└── IMPLEMENTATION_GUIDE.md
```

---

## 🔧 Common Issues & Solutions

### Issue: MongoDB Connection Error

**Solution:**
- Check if MongoDB service is running (local)
- Verify connection string in `.env`
- Check network access settings (Atlas)

### Issue: Port Already in Use

**Solution:**
```powershell
# Kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Issue: CORS Error

**Solution:**
- Verify `CLIENT_URL` in server `.env`
- Check CORS configuration in `server.ts`

---

## Step 10: Complete Authentication System Implementation

### 📋 IMPLEMENTATION PLAN

#### **Phase 1: Setup Foundation**
1. Create TypeScript interfaces/types
2. Setup authentication context
3. Create API service layer
4. Setup backend endpoints

#### **Phase 2: Frontend Components**  
1. Login Form component
2. Register/Buy Form component
3. Authentication logic

#### **Phase 3: Backend Implementation**
1. User model/schema
2. Authentication controllers
3. JWT middleware
4. API routes

---

### 🗂️ Step 10.1: Install Additional Dependencies

**Backend Dependencies:**
```powershell
cd server
npm install bcrypt jsonwebtoken express-validator
npm install --save-dev @types/bcrypt @types/jsonwebtoken
```

**Frontend Dependencies:**
```powershell
cd ../client
npm install lucide-react  # For icons
```

---

### 📁 Step 10.2: Create File Structure

```powershell
# Frontend structure
cd client/src
mkdir types context services
mkdir components/auth pages

# Backend structure  
cd ../../server/src
mkdir models controllers middleware routes
```

**Complete File Structure:**
```
client/src/
├── types/
│   └── auth.ts
├── context/
│   └── AuthContext.tsx
├── services/
│   └── authService.ts
├── components/auth/
│   ├── LoginForm.tsx
│   └── RegisterForm.tsx
└── pages/
    └── AuthPage.tsx

server/src/
├── models/
│   └── User.ts
├── controllers/
│   └── authController.ts
├── middleware/
│   └── auth.ts
└── routes/
    └── auth.ts
```

---

### 💻 Step 10.3: Code Implementation

#### **1. Types Definition (`client/src/types/auth.ts`)**
```typescript
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
```

#### **2. Authentication Context (`client/src/context/AuthContext.tsx`)**
```typescript
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AuthState, AuthContextType, LoginData, RegisterData, User } from '../types/auth';
import { authService } from '../services/authService';

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: true,
};

type AuthAction =
  | { type: 'LOGIN_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'REGISTER_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'LOGOUT' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'AUTH_ERROR' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'AUTH_ERROR':
      localStorage.removeItem('token');
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (data: LoginData) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await authService.login(data);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response });
    } catch (error) {
      dispatch({ type: 'AUTH_ERROR' });
      throw error;
    }
  };

  const register = async (data: RegisterData) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await authService.register(data);
      dispatch({ type: 'REGISTER_SUCCESS', payload: response });
    } catch (error) {
      dispatch({ type: 'AUTH_ERROR' });
      throw error;
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  // Check if user is authenticated on app start
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const user = await authService.getCurrentUser();
          dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
        } catch (error) {
          dispatch({ type: 'AUTH_ERROR' });
        }
      } else {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

#### **3. API Service (`client/src/services/authService.ts`)**
```typescript
import axios from 'axios';
import { LoginData, RegisterData, User } from '../types/auth';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  async login(data: LoginData): Promise<{ user: User; token: string }> {
    const response = await api.post('/auth/login', data);
    return response.data;
  },

  async register(data: RegisterData): Promise<{ user: User; token: string }> {
    const response = await api.post('/auth/register', data);
    return response.data;
  },

  async getCurrentUser(): Promise<User> {
    const response = await api.get('/auth/me');
    return response.data;
  },

  async logout(): Promise<void> {
    await api.post('/auth/logout');
  },
};
```

#### **4. Login Form Component (`client/src/components/auth/LoginForm.tsx`)**
```typescript
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

interface LoginFormProps {
  onSwitchToRegister: () => void;
  onClose: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToRegister, onClose }) => {
  const { login, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(formData);
      onClose();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Welcome Back!
      </h2>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      {/* Switch to Register */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <button
            onClick={onSwitchToRegister}
            className="text-purple-600 hover:text-purple-700 font-semibold"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
```

#### **5. Register Form Component (`client/src/components/auth/RegisterForm.tsx`)**
```typescript
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';

interface RegisterFormProps {
  onSwitchToLogin: () => void;
  onClose: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin, onClose }) => {
  const { register, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    subscriptionType: 'basic' as 'basic' | 'premium' | 'pro',
  });
  const [error, setError] = useState('');

  const subscriptionPlans = [
    { value: 'basic', label: 'Basic - Free', price: 'Free', features: ['10 practice questions', 'Basic theory'] },
    { value: 'premium', label: 'Premium - $19.99', price: '$19.99', features: ['500 practice questions', 'Full theory', 'Progress tracking'] },
    { value: 'pro', label: 'Pro - $39.99', price: '$39.99', features: ['Unlimited questions', 'Full theory', 'Mock exams', 'Priority support'] },
  ];

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    try {
      await register(formData);
      onClose();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Join Our Learning Platform!
      </h2>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="First name"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Last name"
              />
            </div>
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number (Optional)
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Phone number"
            />
          </div>
        </div>

        {/* Password Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Confirm password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Subscription Plan */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Choose Your Plan
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {subscriptionPlans.map((plan) => (
              <div key={plan.value} className="relative">
                <input
                  type="radio"
                  name="subscriptionType"
                  value={plan.value}
                  checked={formData.subscriptionType === plan.value}
                  onChange={handleChange}
                  className="sr-only"
                />
                <label
                  className={`block p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    formData.subscriptionType === plan.value
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold text-gray-800">{plan.label}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {plan.features.map((feature, index) => (
                      <div key={index}>• {feature}</div>
                    ))}
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Creating Account...' : 'Create Account & Buy'}
        </button>
      </form>

      {/* Switch to Login */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="text-purple-600 hover:text-purple-700 font-semibold"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
```

---

### 🔧 Step 10.4: Backend Implementation

#### **1. User Model (`server/src/models/User.ts`)**
```typescript
import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  subscription: {
    type: 'basic' | 'premium' | 'pro';
    expiresAt: Date;
    isActive: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 6 },
  phone: { type: String, trim: true },
  subscription: {
    type: { type: String, enum: ['basic', 'premium', 'pro'], default: 'basic' },
    expiresAt: { type: Date, default: () => new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) },
    isActive: { type: Boolean, default: true }
  }
}, {
  timestamps: true
});

// Hash password before saving
UserSchema.pre<IUser>('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  const saltRounds = 12;
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

// Compare password method
UserSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model<IUser>('User', UserSchema);
```

#### **2. Auth Controller (`server/src/controllers/authController.ts`)**
```typescript
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import User, { IUser } from '../models/User';

// Validation rules
export const registerValidation = [
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('subscriptionType').isIn(['basic', 'premium', 'pro']).withMessage('Invalid subscription type')
];

export const loginValidation = [
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required')
];

// Generate JWT token
const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_EXPIRE || '7d' });
};

// Register user
export const register = async (req: Request, res: Response) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    const { firstName, lastName, email, password, phone, subscriptionType } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Create new user
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      phone,
      subscription: {
        type: subscriptionType || 'basic',
        expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year
        isActive: true
      }
    });

    await user.save();

    // Generate token
    const token = generateToken(user._id.toString());

    // Remove password from response
    const userResponse = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      subscription: user.subscription,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };

    res.status(201).json({
      message: 'User registered successfully',
      user: userResponse,
      token
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
};

// Login user
export const login = async (req: Request, res: Response) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    const { email, password } = req.body;

    // Find user and include password for comparison
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if subscription is active
    if (!user.subscription.isActive || user.subscription.expiresAt < new Date()) {
      return res.status(403).json({ message: 'Subscription has expired' });
    }

    // Generate token
    const token = generateToken(user._id.toString());

    // Remove password from response
    const userResponse = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      subscription: user.subscription,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };

    res.json({
      message: 'Login successful',
      user: userResponse,
      token
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
};

// Get current user
export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Get current user error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Logout user (optional - for token blacklisting)
export const logout = async (req: Request, res: Response) => {
  try {
    // In a production app, you might want to blacklist the token
    res.json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ message: 'Server error during logout' });
  }
};
```

#### **3. Auth Middleware (`server/src/middleware/auth.ts`)**
```typescript
import { Request, Response, NextFunction } from 'express';
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
```

#### **4. Auth Routes (`server/src/routes/auth.ts`)**
```typescript
import express from 'express';
import { 
  register, 
  login, 
  getCurrentUser, 
  logout,
  registerValidation,
  loginValidation
} from '../controllers/authController';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

// Public routes
router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);

// Protected routes
router.get('/me', authenticateToken, getCurrentUser);
router.post('/logout', authenticateToken, logout);

export default router;
```

#### **5. Update Main Server (`server/src/server.ts`)**
```typescript
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes
import authRoutes from './routes/auth';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch((error) => console.error('❌ MongoDB connection error:', error));

// Routes
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 API: http://localhost:${PORT}/api`);
});
```

---

### 🔗 Step 10.5: Integration Steps

#### **1. Update App.tsx to use AuthProvider**
```typescript
import React from 'react';
import { AuthProvider } from './context/AuthContext';
// ... other imports

function App() {
  return (
    <AuthProvider>
      {/* Your existing app content */}
      <div className="min-h-screen bg-cover bg-center bg-fixed"
           style={{ backgroundImage: "url('/background.png')" }}>
        {/* ... */}
      </div>
    </AuthProvider>
  );
}

export default App;
```

#### **2. Update TopNav to handle authentication**
```typescript
// Add to TopNav component
import { useAuth } from '../../context/AuthContext';

export const TopNav = () => {
  const { user, isAuthenticated, logout } = useAuth();
  
  return (
    <nav className="top-nav">
      {/* ... existing nav content */}
      
      <div className="auth-section">
        {isAuthenticated ? (
          <div className="user-menu">
            <span>Welcome, {user?.firstName}!</span>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className="auth-buttons">
            <button onClick={openLoginModal}>Login</button>
            <button onClick={openRegisterModal}>Register</button>
          </div>
        )}
      </div>
    </nav>
  );
};
```

#### **3. Create Auth Modal Component**
```powershell
# Create AuthModal component
cd client/src/components/auth
New-Item -Path AuthModal.tsx -ItemType File
```

```typescript
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'login' | 'register';
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  defaultMode = 'login' 
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(defaultMode);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        
        <div className="p-6">
          {mode === 'login' ? (
            <LoginForm 
              onSwitchToRegister={() => setMode('register')}
              onClose={onClose}
            />
          ) : (
            <RegisterForm 
              onSwitchToLogin={() => setMode('login')}
              onClose={onClose}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
```

---

### ✅ Step 10.6: Testing the Implementation

#### **1. Test Backend Endpoints**

**Start the servers:**
```powershell
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend  
cd client
npm run dev
```

**Test with Postman or curl:**

**Register:** POST `http://localhost:5000/api/auth/register`
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123",
  "subscriptionType": "premium"
}
```

**Login:** POST `http://localhost:5000/api/auth/login`
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### **2. Frontend Integration Test**
1. Open `http://localhost:3000`
2. Click Register/Login buttons
3. Fill out forms and submit
4. Check browser console for any errors
5. Verify localStorage contains JWT token
6. Test logout functionality

---

### 🔒 Step 10.7: Security Enhancements

#### **1. Environment Variables Checklist**
```env
# server/.env
JWT_SECRET=your_very_long_random_secret_key_change_in_production
JWT_EXPIRE=7d
MONGO_URI=mongodb://localhost:27017/traffic-school
BCRYPT_ROUNDS=12
MAX_LOGIN_ATTEMPTS=5
LOCKOUT_TIME=900000
```

#### **2. Add Rate Limiting**
```powershell
cd server
npm install express-rate-limit
```

#### **3. Input Sanitization**
```powershell
npm install express-mongo-sanitize helmet
```

---

## 📝 Next Steps

1. ✅ Read the full `IMPLEMENTATION_GUIDE.md`
2. ✅ Set up Trello board for task management
3. ✅ Start implementing models (User, Question, Lesson)
4. ✅ **Build authentication system - COMPLETED**
5. ✅ Create quiz components
6. ✅ Add multilingual support
7. 🆕 Add payment integration (Stripe/PayPal)
8. 🆕 Add password reset functionality
9. 🆕 Create protected routes
10. 🆕 Add user dashboard

---

## 🆘 Need Help?

- Check `IMPLEMENTATION_GUIDE.md` for detailed instructions
- Review the README.md for project overview
- Contact: giashsw@gmail.com

**Happy Coding! 🚗💨**
