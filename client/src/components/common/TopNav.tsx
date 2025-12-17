
import { LogIn, UserPlus, Moon, Sun, Globe, ChevronDown, LayoutDashboard, BrainCircuit, BookOpen, TrafficCone, FileText, Trophy, BarChart, User, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

interface TopNavProps {
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
  onRegisterBuyClick: () => void; // New prop to open the modal
  onLoginClick?: () => void; // New prop to open login
  selectedLanguage?: string;
  onLanguageChange?: (language: string) => void;
}

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '#' },
  { name: 'IQ Questions', icon: BrainCircuit, href: '#' },
  { name: 'Theory Lessons', icon: BookOpen, href: '#' },
  { name: 'Traffic Signs', icon: TrafficCone, href: '#' },
  { name: 'Practice Tests', icon: FileText, href: '#' },
  { name: 'Final Test', icon: Trophy, href: '#' },
  { name: 'Results', icon: BarChart, href: '#' },
];

const languageOptions = [
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'ban', name: 'বাংলা', flag: '🇧🇩' },
  { code: 'eng', name: 'English', flag: '🇺🇸' },
];

export default function TopNav({ isDarkMode = false, onThemeToggle, onRegisterBuyClick, onLoginClick, selectedLanguage = 'eng', onLanguageChange }: TopNavProps) {
  const { user, isAuthenticated, logout } = useAuth();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  const currentLanguage = languageOptions.find(lang => lang.code === selectedLanguage) || languageOptions[2];
  
  const handleLanguageSelect = (languageCode: string) => {
    onLanguageChange?.(languageCode);
    setIsLanguageDropdownOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    window.location.href = '/'; // Redirect to home after logout
  };

  return (
    <header className={`top-nav ${isDarkMode ? 'dark' : 'light'}`}>
      
      {/* ROW 1: MAIN HEADER (Branding) */}
      <div className={`header-row ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="logo-container">
          <img src="/LOGO.png" alt="Logo Left" className="logo" />
        </div>
        <div className="title-container">
          <h1 className="school-title">Giash Online Traffic School</h1>
        </div>
        <div className="header-right">
          {/* Language Selector */}
          <div className="language-selector">
            <button 
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className={`language-btn ${isDarkMode ? 'dark' : 'light'}`}
            >
              <Globe size={16} />
              <span className="language-text">
                {currentLanguage.flag} {currentLanguage.code.toUpperCase()}
              </span>
              <ChevronDown size={14} className={`chevron ${isLanguageDropdownOpen ? 'rotated' : ''}`} />
            </button>
            
            {isLanguageDropdownOpen && (
              <div className={`language-dropdown ${isDarkMode ? 'dark' : 'light'}`}>
                {languageOptions.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className={`language-option ${selectedLanguage === lang.code ? 'active' : ''} ${isDarkMode ? 'dark' : 'light'}`}
                  >
                    <span className="flag">{lang.flag}</span>
                    <span className="lang-name">{lang.name}</span>
                    <span className="lang-code">({lang.code.toUpperCase()})</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Logo */}
          <div className="logo-container">
            <img src="/LOGO.png" alt="Logo Right" className="logo" />
          </div>
        </div>
      </div>

      {/* ROW 2: NAVBAR (Navigation & Actions) */}
      <nav className={`nav-row ${isDarkMode ? 'dark' : 'light'}`}>
        
        {/* LEFT: Navigation Links */}
        <div className="nav-links">
          {navItems.map(item => (
            <a key={item.name} href={item.href} className={`nav-item ${isDarkMode ? 'dark' : 'light'}`}>
              <item.icon size={18} />
              <span className="nav-text">{item.name}</span>
            </a>
          ))}
        </div>

        {/* RIGHT: Actions (Login, Register/Buy or User Menu) */}
        <div className="action-buttons">
          <button onClick={onThemeToggle} className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}>
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          {isAuthenticated && user ? (
            /* Logged In User Menu */
            <div className="user-menu-container" style={{ position: 'relative' }}>
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="user-menu-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 16px',
                  backgroundColor: '#7e11d6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#6b0fb8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#7e11d6';
                }}
              >
                <User size={18} />
                <span>{user.firstName} {user.lastName}</span>
                <ChevronDown size={14} className={`chevron ${isUserMenuOpen ? 'rotated' : ''}`} />
              </button>
              
              {isUserMenuOpen && (
                <div 
                  className={`user-dropdown ${isDarkMode ? 'dark' : 'light'}`}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '8px',
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                    minWidth: '220px',
                    zIndex: 1000,
                    overflow: 'hidden'
                  }}
                >
                  <div style={{
                    padding: '16px',
                    borderBottom: '1px solid #e5e7eb',
                    backgroundColor: '#f9fafb'
                  }}>
                    <p style={{
                      margin: 0,
                      fontSize: '0.95rem',
                      fontWeight: '700',
                      color: '#111827'
                    }}>
                      {user.firstName} {user.lastName}
                    </p>
                    <p style={{
                      margin: '4px 0 0',
                      fontSize: '0.85rem',
                      color: '#6b7280'
                    }}>
                      {user.email}
                    </p>
                  </div>
                  
                  <button
                    onClick={handleLogout}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 16px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      color: '#dc2626',
                      fontWeight: '600',
                      transition: 'background-color 0.2s',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#fef2f2';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Not Logged In - Show Register/Login Buttons */
            <>
              <button onClick={() => { console.log('Register/Buy clicked!'); onRegisterBuyClick(); }} className="register-buy-btn">
                <UserPlus size={16} />
                <span>Register / Buy</span>
              </button>
              <button onClick={() => { console.log('Login clicked!'); onLoginClick?.(); }} className={`login-btn ${isDarkMode ? 'dark' : 'light'}`}>
                <LogIn size={16} />
                <span>Login</span>
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}