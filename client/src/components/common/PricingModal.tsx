import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle } from 'lucide-react';
import { RegisterForm } from '../auth/RegisterForm';
import { LoginForm } from '../auth/LoginForm';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  showLoginDirectly?: boolean;
}

const packages = [
  {
    name: '1 Month',
    price: '149 SEK',
    features: ['Full access to all theory', '1000+ practice questions', 'Realistic final tests'],
    popular: false,
  },
  {
    name: '3 Months',
    price: '299 SEK',
    features: ['All features from 1 Month', 'Save on monthly cost', 'Ideal for most learners'],
    popular: true,
  },
  {
    name: '6 Months',
    price: '499 SEK',
    features: ['All features from 3 Months', 'Best value for long-term study', 'No pressure, learn at your pace'],
    popular: false,
  },
];

export default function PricingModal({ isOpen, onClose, showLoginDirectly = false }: PricingModalProps) {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('basic');

  useEffect(() => {
    if (isOpen && showLoginDirectly) {
      setShowLoginForm(true);
      setShowRegisterForm(false);
    } else if (isOpen) {
      setShowLoginForm(false);
      setShowRegisterForm(false);
    }
  }, [isOpen, showLoginDirectly]);

  if (!isOpen) {
    return null;
  }

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setShowRegisterForm(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegisterForm(false);
    setShowLoginForm(true);
  };

  const handleSwitchToRegister = () => {
    setSelectedPlan(''); // Clear selected plan when switching from login to register
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };

  const handleBackToPricing = () => {
    setShowRegisterForm(false);
    setShowLoginForm(false);
    setSelectedPlan('');
  };

  const handleCloseAll = () => {
    setShowRegisterForm(false);
    setShowLoginForm(false);
    onClose();
  };

  const modalContent = showLoginForm ? (
      <div 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 99999
        }}
        onClick={handleCloseAll}
      >
        <div 
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '32px',
            maxWidth: '28rem',
            width: '100%',
            position: 'relative',
            zIndex: 100000
          }}
          onClick={e => e.stopPropagation()}
        >
          <button onClick={handleCloseAll} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white">
            <X size={24} />
          </button>
          <LoginForm onSwitchToRegister={handleSwitchToRegister} onClose={handleCloseAll} />
        </div>
      </div>
  ) : showRegisterForm ? (
      <div 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          overflowY: 'auto',
          padding: '80px 20px 40px',
          zIndex: 99999
        }}
        onClick={handleCloseAll}
      >
        <div 
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '32px',
            maxWidth: '42rem',
            width: '100%',
            position: 'relative',
            zIndex: 100000
          }}
          onClick={e => e.stopPropagation()}
        >
          <button onClick={handleCloseAll} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white">
            <X size={24} />
          </button>
          <RegisterForm 
            onSwitchToLogin={handleSwitchToLogin} 
            onClose={handleCloseAll} 
            selectedPlan={selectedPlan}
            onBackToPricing={handleBackToPricing}
          />
        </div>
      </div>
  ) : (
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999
      }}
      onClick={onClose}
    >
      <div 
        style={{ 
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '48px',
          maxWidth: '72rem',
          width: '95%',
          position: 'relative',
          zIndex: 100000,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '8px',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <X size={28} color="#6b7280" />
        </button>
        
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            color: '#7e11d6',
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>Choose Your Plan</h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#4b5563',
            marginBottom: '12px'
          }}>Register by selecting a package to get started.</p>
          <p style={{ 
            fontSize: '0.95rem', 
            color: '#6b7280'
          }}>
            Already have an account? <button 
              onClick={() => setShowLoginForm(true)} 
              style={{
                color: '#2563eb',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
                fontWeight: '600'
              }}
            >Login here</button>
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '32px',
          marginTop: '32px'
        }}>
          {packages.map((pkg) => (
            <div 
              key={pkg.name} 
              style={{
                border: pkg.popular ? '3px solid #3b82f6' : '2px solid #e5e7eb',
                borderRadius: '16px',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                backgroundColor: pkg.popular ? '#eff6ff' : 'white',
                boxShadow: pkg.popular ? '0 10px 25px -5px rgba(59, 130, 246, 0.2)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                transform: pkg.popular ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              {pkg.popular && <span style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: '700',
                padding: '6px 16px',
                borderRadius: '9999px',
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap'
              }}>Most Popular</span>}
              <h3 style={{ 
                fontSize: '1.875rem', 
                fontWeight: '700', 
                textAlign: 'center',
                color: '#1f2937',
                marginTop: pkg.popular ? '12px' : '0',
                marginBottom: '20px'
              }}>{pkg.name}</h3>
              <p style={{ 
                fontSize: '3rem', 
                fontWeight: '800', 
                textAlign: 'center',
                color: '#7e11d6',
                marginBottom: '28px'
              }}>{pkg.price}</p>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                marginBottom: '32px',
                flexGrow: 1
              }}>
                {pkg.features.map((feature, i) => (
                  <li key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    marginBottom: '16px',
                    fontSize: '0.95rem'
                  }}>
                    <CheckCircle size={20} color="#10b981" style={{ flexShrink: 0 }} />
                    <span style={{ color: '#374151', lineHeight: '1.5' }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handleSelectPlan(pkg.name)}
                style={{
                  marginTop: 'auto',
                  width: '100%',
                  padding: '14px 24px',
                  borderRadius: '10px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: pkg.popular ? '#3b82f6' : '#e5e7eb',
                  color: pkg.popular ? 'white' : '#1f2937',
                  transition: 'all 0.2s',
                  boxShadow: pkg.popular ? '0 4px 6px -1px rgba(59, 130, 246, 0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = pkg.popular ? '#2563eb' : '#d1d5db';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = pkg.popular ? '0 6px 12px -2px rgba(59, 130, 246, 0.4)' : '0 2px 4px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = pkg.popular ? '#3b82f6' : '#e5e7eb';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = pkg.popular ? '0 4px 6px -1px rgba(59, 130, 246, 0.3)' : 'none';
                }}
              >
                Select Plan & Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}