
import { LogIn, UserPlus, Moon, Sun, Globe, ChevronDown, LayoutDashboard, BrainCircuit, BookOpen, TrafficCone, FileText, Trophy, BarChart, User, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { t } from '../../i18n';

interface TopNavProps {
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
  onRegisterBuyClick: () => void; // New prop to open the modal
  onLoginClick?: () => void; // New prop to open login
  selectedLanguage?: string;
  onLanguageChange?: (language: string) => void;
}

const navItems = [
  { key: 'nav.dashboard' as const, icon: LayoutDashboard, route: '/dashboard' },
  { key: 'nav.iqQuestions' as const, icon: BrainCircuit, route: '/iq-questions' },
  { key: 'nav.theorySections' as const, icon: BookOpen, route: '/theory-lessons' },
  { key: 'nav.trafficSigns' as const, icon: TrafficCone, route: '/traffic-signs' },
  { key: 'nav.practiceTests' as const, icon: FileText, route: '/practice-tests' },
  { key: 'nav.finalTest' as const, icon: Trophy, route: '/final-test' },
  { key: 'nav.results' as const, icon: BarChart, route: '/results' },
];

const languageOptions = [
  { code: 'sv', name: 'Svenska', flag: 'se', countryCode: 'SE' },
  { code: 'ban', name: 'বাংলা', flag: 'bd', countryCode: 'BD' },
  { code: 'eng', name: 'English', flag: 'us', countryCode: 'US' },
  { code: 'ar', name: 'العربية', flag: 'sa', countryCode: 'SA' },
  { code: 'fa', name: 'فارسی', flag: 'ir', countryCode: 'IR' },
  { code: 'ua', name: 'Українська', flag: 'ua', countryCode: 'UA' },
  { code: 'ur', name: 'اردو', flag: 'pk', countryCode: 'PK' },
];

export default function TopNav({ isDarkMode = false, onThemeToggle, onRegisterBuyClick, onLoginClick, selectedLanguage = 'eng', onLanguageChange }: TopNavProps) {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
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
          <h1 className="school-title">KörStart</h1>
        </div>
        <div className="header-right">
          {/* Language Selector */}
          <div className="language-selector">
            <button 
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className={`language-btn ${isDarkMode ? 'dark' : 'light'}`}
            >
              <Globe size={16} />
              <span className="language-text" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <img 
                  src={`https://flagcdn.com/16x12/${currentLanguage.flag}.png`} 
                  alt={currentLanguage.countryCode}
                  style={{ width: '20px', height: '15px', objectFit: 'cover', borderRadius: '2px' }}
                />
                <span>{currentLanguage.code.toUpperCase()}</span>
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
                    <img 
                      src={`https://flagcdn.com/16x12/${lang.flag}.png`} 
                      alt={lang.countryCode}
                      className="flag"
                      style={{ width: '24px', height: '18px', objectFit: 'cover', borderRadius: '2px', marginRight: '8px' }}
                    />
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
            <button
              key={item.key}
              onClick={() => navigate(item.route)}
              className={`nav-item ${isDarkMode ? 'dark' : 'light'}`}
            >
              <item.icon size={18} />
              <span className="nav-text">{t(selectedLanguage, item.key)}</span>
            </button>
          ))}
        </div>

        {/* RIGHT: Actions (Login, Register/Buy or User Menu) */}
        <div className="action-buttons">
          <button onClick={onThemeToggle} className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}>
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          {isAuthenticated && user ? (
            /* Logged In User Menu */
            <div className="user-menu-container">
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="user-menu-btn"
              >
                <User size={18} />
                <span>{user.firstName} {user.lastName}</span>
                <ChevronDown size={14} className={`chevron ${isUserMenuOpen ? 'rotated' : ''}`} />
              </button>
              
              {isUserMenuOpen && (
                <div className={`user-dropdown ${isDarkMode ? 'dark' : 'light'}`}>
                  <div className={`user-dropdown-header ${isDarkMode ? 'dark' : 'light'}`}>
                    <p className="user-name">{user.firstName} {user.lastName}</p>
                    <p className="user-email">{user.email}</p>
                  </div>
                  
                  <button
                    onClick={handleLogout}
                    className={`logout-btn ${isDarkMode ? 'dark' : 'light'}`}
                  >
                    <LogOut size={18} />
                    <span>{t(selectedLanguage, 'auth.logout')}</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Not Logged In - Show Register/Login Buttons */
            <>
              <button onClick={() => { console.log('Register/Buy clicked!'); onRegisterBuyClick(); }} className="register-buy-btn">
                <UserPlus size={16} />
                <span>{t(selectedLanguage, 'auth.registerBuy')}</span>
              </button>
              <button onClick={() => { console.log('Login clicked!'); onLoginClick?.(); }} className={`login-btn ${isDarkMode ? 'dark' : 'light'}`}>
                <LogIn size={16} />
                <span>{t(selectedLanguage, 'auth.login')}</span>
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}