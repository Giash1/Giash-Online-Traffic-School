import { BookOpen, Languages, HelpCircle, Trophy } from 'lucide-react';
import './App.scss';
import { useLanguage } from './context/LanguageContext';
import { t } from './i18n';

function App() {
  const { language } = useLanguage ? useLanguage() : { language: 'eng' };
  const features = [
    {
      icon: Languages,
      title: t(language, 'welcome.feature1.title'),
      description: t(language, 'welcome.feature1.desc'),
      color: 'text-blue-500'
    },
    {
      icon: BookOpen,
      title: t(language, 'welcome.feature2.title'),
      description: t(language, 'welcome.feature2.desc'),
      color: 'text-green-500'
    },
    {
      icon: HelpCircle,
      title: t(language, 'welcome.feature3.title'),
      description: t(language, 'welcome.feature3.desc'),
      color: 'text-yellow-500'
    },
    {
      icon: Trophy,
      title: t(language, 'welcome.feature4.title'),
      description: t(language, 'welcome.feature4.desc'),
      color: 'text-red-500'
    }
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className={`min-h-screen w-full bg-gray-50/80 backdrop-blur-sm`}>
        <main className="main-content">
          <h1 className="welcome-heading">{t(language, 'welcome.title')}</h1>
          <p className="welcome-subheading">{t(language, 'welcome.subtitle')}</p>

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
  );
}

export default App;