
import { LogIn, UserPlus, Moon, Sun, Globe, ChevronDown, LayoutDashboard, BrainCircuit, BookOpen, TrafficCone, FileText, Trophy, BarChart } from 'lucide-react';
import { useState } from 'react';

interface TopNavProps {
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
  onRegisterBuyClick: () => void; // New prop to open the modal
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

export default function TopNav({ isDarkMode = false, onThemeToggle, onRegisterBuyClick, selectedLanguage = 'eng', onLanguageChange }: TopNavProps) {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  
  const currentLanguage = languageOptions.find(lang => lang.code === selectedLanguage) || languageOptions[2];
  
  const handleLanguageSelect = (languageCode: string) => {
    onLanguageChange?.(languageCode);
    setIsLanguageDropdownOpen(false);
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

        {/* RIGHT: Actions (Login, Register/Buy) */}
        <div className="action-buttons">
          <button onClick={onThemeToggle} className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}>
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={onRegisterBuyClick} className="register-buy-btn">
            <UserPlus size={16} />
            <span>Register / Buy</span>
          </button>
          <button className={`login-btn ${isDarkMode ? 'dark' : 'light'}`}>
            <LogIn size={16} />
            <span>Login</span>
          </button>
        </div>
      </nav>
    </header>
  );
}