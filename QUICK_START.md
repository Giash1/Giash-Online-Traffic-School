# Quick Start Guide - Swedish Traffic School

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

```powershell
# In server folder
cd ../server
mkdir src
cd src
mkdir config controllers models routes middleware utils
cd ..

# In client folder
cd ../client/src
mkdir components pages context hooks services types utils
mkdir components/common components/quiz components/lessons components/auth
cd ../..
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

## 📝 Next Steps

1. ✅ Read the full `IMPLEMENTATION_GUIDE.md`
2. ✅ Set up Trello board for task management
3. ✅ Start implementing models (User, Question, Lesson)
4. ✅ Build authentication system
5. ✅ Create quiz components
6. ✅ Add multilingual support

---

## 🆘 Need Help?

- Check `IMPLEMENTATION_GUIDE.md` for detailed instructions
- Review the README.md for project overview
- Contact: giashsw@gmail.com

**Happy Coding! 🚗💨**
