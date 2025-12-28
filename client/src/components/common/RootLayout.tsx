import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';
import PricingModal from './PricingModal';
import Footer from './Footer';
import { LanguageProvider, useLanguage } from '../../context/LanguageContext';

const RootLayoutInner: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [showLoginDirectly, setShowLoginDirectly] = useState(false);
  const { language, setLanguage } = useLanguage();

  return (
    <>
      <TopNav
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
        selectedLanguage={language}
        onLanguageChange={(lang) => setLanguage(lang as any)}
        onRegisterBuyClick={() => {
          setShowLoginDirectly(false);
          setIsPricingModalOpen(true);
        }}
        onLoginClick={() => {
          setShowLoginDirectly(true);
          setIsPricingModalOpen(true);
        }}
      />

      <Outlet />

      <PricingModal
        isOpen={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
        showLoginDirectly={showLoginDirectly}
      />
      <Footer />
    </>
  );
};

const RootLayout: React.FC = () => (
  <LanguageProvider>
    <RootLayoutInner />
  </LanguageProvider>
);

export default RootLayout;
