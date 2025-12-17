import { useState } from 'react';
import TopNav from './components/common/TopNav';
import PricingModal from './components/common/PricingModal'; // Import the new modal
import { BookOpen, Languages, HelpCircle, Trophy } from 'lucide-react';
import './App.scss';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [showLoginDirectly, setShowLoginDirectly] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('eng');

  const features = [
    {
      icon: Languages,
      title: 'Multi-Language Support',
      description: 'Learn in Swedish, English, or Bangla. Our platform is designed to break down language barriers, making learning accessible for everyone.',
      color: 'text-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Theory',
      description: 'We cover all chapters of the official Swedish driving license theory book, simplifying complex topics with clear explanations.',
      color: 'text-green-500'
    },
    {
      icon: HelpCircle,
      title: '1000+ Practice Questions',
      description: 'Test your knowledge with a vast question bank that mirrors the real exam, with detailed explanations for every question.',
      color: 'text-yellow-500'
    },
    {
      icon: Trophy,
      title: 'Realistic Final Tests',
      description: 'Simulate the actual test environment to build your confidence and readiness for the final exam.',
      color: 'text-red-500'
    }
  ];

  return (
    <>
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900/80' : 'bg-gray-50/80'} backdrop-blur-sm`}>
          <TopNav 
            isDarkMode={isDarkMode}
            onThemeToggle={() => setIsDarkMode(!isDarkMode)}
            selectedLanguage={selectedLanguage}
            onLanguageChange={(lang) => setSelectedLanguage(lang)}
            onRegisterBuyClick={() => {
              console.log('App: Setting modal open for register');
              setShowLoginDirectly(false);
              setIsPricingModalOpen(true);
              console.log('App: isPricingModalOpen should be true');
            }}
            onLoginClick={() => {
              console.log('App: Setting modal open for login');
              setShowLoginDirectly(true);
              setIsPricingModalOpen(true);
              console.log('App: isPricingModalOpen should be true');
            }}
          />
          
          {/* Main Content Area - No Sidebar needed here anymore */}
          <main className="main-content">
            <h1 className="welcome-heading">Welcome to Giash Online Traffic School</h1>
            <p className="welcome-subheading">Your complete guide to passing the Swedish driving license theory test.</p>
            
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <feature.icon className={`feature-icon ${feature.color}`} strokeWidth={1.5} />
                  <div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      
      {/* Render the Pricing Modal */}
      <PricingModal 
        isOpen={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
        showLoginDirectly={showLoginDirectly}
      />
    </>
  );
}

export default App;