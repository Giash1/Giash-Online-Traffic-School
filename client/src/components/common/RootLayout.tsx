import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';
import PricingModal from './PricingModal';

const RootLayout: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [showLoginDirectly, setShowLoginDirectly] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('eng');

  return (
    <>
      <TopNav
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
        selectedLanguage={selectedLanguage}
        onLanguageChange={(lang) => setSelectedLanguage(lang)}
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
    </>
  );
};

export default RootLayout;
