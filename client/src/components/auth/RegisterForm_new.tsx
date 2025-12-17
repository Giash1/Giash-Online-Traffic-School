import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Eye, EyeOff } from 'lucide-react';

interface RegisterFormProps {
  onSwitchToLogin: () => void;
  onClose: () => void;
  selectedPlan?: string;
}

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  border: '2px solid #d1d5db',
  borderRadius: '10px',
  fontSize: '1rem',
  transition: 'all 0.2s',
  outline: 'none'
};

const labelStyle = {
  display: 'block',
  fontSize: '0.95rem',
  fontWeight: '600',
  color: '#374151',
  marginBottom: '10px'
};

const getSubscriptionType = (plan: string | undefined): 'basic' | 'premium' | 'pro' => {
  if (plan === '1 Month') return 'basic';
  if (plan === '3 Months') return 'premium';
  if (plan === '6 Months') return 'pro';
  return 'basic';
};

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin, onClose, selectedPlan }) => {
  const { register, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    subscriptionType: getSubscriptionType(selectedPlan) as 'basic' | 'premium' | 'pro',
  });
  const [error, setError] = useState('');

  const planDetails: Record<string, { name: string, price: string, features: string[] }> = {
    '1 Month': { name: '1 Month', price: '149 SEK', features: ['Full access to all theory', '1000+ practice questions', 'Realistic final tests'] },
    '3 Months': { name: '3 Months', price: '299 SEK', features: ['All features from 1 Month', 'Save on monthly cost', 'Ideal for most learners'] },
    '6 Months': { name: '6 Months', price: '499 SEK', features: ['All features from 3 Months', 'Best value for long-term study', 'No pressure, learn at your pace'] }
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    try {
      await register(formData);
      onClose();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
      <h2 style={{ 
        fontSize: '2.25rem', 
        fontWeight: '700', 
        textAlign: 'center',
        marginBottom: '36px',
        color: '#7e11d6',
        letterSpacing: '-0.02em'
      }}>
        Join Our Learning Platform!
      </h2>

      {error && (
        <div style={{
          backgroundColor: '#fef2f2',
          border: '2px solid #fecaca',
          color: '#dc2626',
          padding: '16px 20px',
          borderRadius: '12px',
          marginBottom: '28px',
          fontWeight: '500',
          fontSize: '0.95rem'
        }}>
          {error}
        </div>
      )}

      {/* Selected Plan Display */}
      {selectedPlan && planDetails[selectedPlan] && (
        <div style={{
          backgroundColor: '#f3e8ff',
          border: '3px solid #7e11d6',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '12px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#7e11d6', margin: 0 }}>
              Selected Plan: {planDetails[selectedPlan].name}
            </h3>
            <p style={{ fontSize: '2rem', fontWeight: '800', color: '#7e11d6', margin: 0 }}>
              {planDetails[selectedPlan].price}
            </p>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {planDetails[selectedPlan].features.map((feature, i) => (
              <li key={i} style={{ color: '#374151', marginBottom: '8px', fontSize: '0.95rem' }}>
                ✓ {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Name Fields */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div>
            <label style={labelStyle}>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={inputStyle}
              placeholder="First name"
              onFocus={(e) => {
                e.target.style.borderColor = '#7e11d6';
                e.target.style.boxShadow = '0 0 0 3px rgba(126, 17, 214, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#d1d5db';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          <div>
            <label style={labelStyle}>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={inputStyle}
              placeholder="Last name"
              onFocus={(e) => {
                e.target.style.borderColor = '#7e11d6';
                e.target.style.boxShadow = '0 0 0 3px rgba(126, 17, 214, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#d1d5db';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label style={labelStyle}>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
            placeholder="your@email.com"
            onFocus={(e) => {
              e.target.style.borderColor = '#7e11d6';
              e.target.style.boxShadow = '0 0 0 3px rgba(126, 17, 214, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#d1d5db';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Phone */}
        <div>
          <label style={labelStyle}>Phone Number (Optional)</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Phone number"
            onFocus={(e) => {
              e.target.style.borderColor = '#7e11d6';
              e.target.style.boxShadow = '0 0 0 3px rgba(126, 17, 214, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#d1d5db';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Password Fields */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div>
            <label style={labelStyle}>Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{ ...inputStyle, paddingRight: '44px' }}
                placeholder="Password"
                onFocus={(e) => {
                  e.target.style.borderColor = '#7e11d6';
                  e.target.style.boxShadow = '0 0 0 3px rgba(126, 17, 214, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  color: '#9ca3af'
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <div>
            <label style={labelStyle}>Confirm Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                style={{ ...inputStyle, paddingRight: '44px' }}
                placeholder="Confirm password"
                onFocus={(e) => {
                  e.target.style.borderColor = '#7e11d6';
                  e.target.style.boxShadow = '0 0 0 3px rgba(126, 17, 214, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: 'absolute',
                  right: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  color: '#9ca3af'
                }}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: '100%',
            backgroundColor: '#7e11d6',
            color: 'white',
            padding: '16px 24px',
            borderRadius: '12px',
            fontWeight: '700',
            fontSize: '1.05rem',
            border: 'none',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s',
            opacity: isLoading ? 0.6 : 1,
            boxShadow: '0 4px 12px rgba(126, 17, 214, 0.3)',
            marginTop: '8px'
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.currentTarget.style.backgroundColor = '#6b0fb8';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(126, 17, 214, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.currentTarget.style.backgroundColor = '#7e11d6';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(126, 17, 214, 0.3)';
            }
          }}
        >
          {isLoading ? 'Creating Account...' : 'Create Account & Buy'}
        </button>
      </form>

      {/* Switch to Login and Forgot Password */}
      <div style={{ 
        marginTop: '32px', 
        padding: '24px',
        borderTop: '2px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'center'
      }}>
        <p style={{ color: '#374151', fontSize: '1rem', margin: 0 }}>
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            style={{
              color: '#7e11d6',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '1rem',
              padding: '4px 8px',
              borderRadius: '6px',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f3e8ff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Sign In
          </button>
        </p>
        <button
          type="button"
          onClick={() => {/* Handle forgot password */}}
          style={{
            color: '#6b7280',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.9rem',
            textDecoration: 'underline',
            padding: '4px'
          }}
        >
          Forgot Password?
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
