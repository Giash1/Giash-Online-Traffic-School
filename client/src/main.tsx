import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import CheckoutPage from './pages/CheckoutPage'
import Dashboard from './pages/Dashboard'
import TheoryLessonsPage from './pages/TheoryLessonsPage'
import LessonPage from './pages/LessonPage'
import { AuthProvider } from './context/AuthContext'
import './index.css'
import RootLayout from './components/common/RootLayout'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<App />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="theory-lessons" element={<TheoryLessonsPage />} />
            <Route path="lesson/:lessonId" element={<LessonPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
