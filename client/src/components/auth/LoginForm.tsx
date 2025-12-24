import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  onSwitchToRegister: () => void;
  onClose: () => void;
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

export const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToRegister, onClose }) => {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail) {
      alert('Please enter your email address');
      return;
    }
    // TODO: Implement actual password reset API call
    alert(`Password reset link has been sent to ${resetEmail}. (This is a demo - actual email sending will be implemented)`);
    setShowForgotPassword(false);
    setResetEmail('');
  };
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(formData);
      onClose();
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  // Show forgot password form if active
  if (showForgotPassword) {
    return (
      <div style={{ maxWidth: '28rem', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '2.25rem', 
          fontWeight: '700', 
          textAlign: 'center',
          marginBottom: '16px',
          color: '#7e11d6',
          letterSpacing: '-0.02em'
        }}>
          Reset Password
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '32px', fontSize: '1rem' }}>
          Enter your email address and we'll send you a link to reset your password.
        </p>
        
        <form onSubmit={handleForgotPassword}>
          <div style={{ marginBottom: '24px' }}>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              placeholder="your@email.com"
              required
              style={inputStyle}
              onFocus={(e) => e.currentTarget.style.borderColor = '#7e11d6'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
            />
          </div>
          
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#7e11d6',
              color: 'white',
              padding: '16px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s',
              marginBottom: '16px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#6b0fb8';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(126, 17, 214, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#7e11d6';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Send Reset Link
          </button>
          
          <button
            type="button"
            onClick={() => setShowForgotPassword(false)}
            style={{
              width: '100%',
              backgroundColor: 'transparent',
              color: '#6b7280',
              padding: '12px',
              borderRadius: '12px',
              border: '2px solid #d1d5db',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#7e11d6';
              e.currentTarget.style.color = '#7e11d6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#d1d5db';
              e.currentTarget.style.color = '#6b7280';
            }}
          >
            Back to Login
          </button>
        </form>
      </div>
    );
  }
  return (
    <div style={{ maxWidth: '28rem', margin: '0 auto' }}>
      <h2 style={{ 
        fontSize: '2.25rem', 
        fontWeight: '700', 
        textAlign: 'center',
        marginBottom: '36px',
        color: '#7e11d6',
        letterSpacing: '-0.02em'
      }}>
        Welcome Back!
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

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Email Field */}
        <div>
          <label style={labelStyle}>
            Email Address
          </label>
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

        {/* Password Field */}
        <div>
          <label style={labelStyle}>
            Password
          </label>
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
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      {/* Switch to Register and Forgot Password */}
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
          Don't have an account?{' '}
          <button
            onClick={onSwitchToRegister}
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
            Sign Up
          </button>
        </p>
        <button
          type="button"
          onClick={() => setShowForgotPassword(true)}
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

export default LoginForm;