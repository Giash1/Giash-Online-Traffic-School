import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CreditCard, Lock, Check, ArrowLeft } from 'lucide-react';

interface CheckoutPageProps {}

interface PlanDetails {
  name: string;
  price: string;
  duration: string;
  features: string[];
}

const CheckoutPage: React.FC<CheckoutPageProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get plan details from navigation state
  const planDetails: PlanDetails = location.state?.planDetails || {
    name: '1 Month Plan',
    price: '149 SEK',
    duration: '1 Month',
    features: ['Full access to all theory', '1000+ practice questions', 'Realistic final tests']
  };

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'swish' | 'klarna'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    postalCode: '',
    city: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      const formatted = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      setCardDetails(prev => ({ ...prev, [name]: formatted }));
    } 
    // Format expiry date
    else if (name === 'expiryDate') {
      const formatted = value.replace(/\D/g, '').replace(/(\d{2})(\d{0,2})/, '$1/$2');
      setCardDetails(prev => ({ ...prev, [name]: formatted }));
    }
    // Limit CVV to 3-4 digits
    else if (name === 'cvv') {
      const formatted = value.replace(/\D/g, '').slice(0, 4);
      setCardDetails(prev => ({ ...prev, [name]: formatted }));
    }
    else {
      setCardDetails(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      
      // Redirect to home page after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 2000);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    border: '2px solid #e5e7eb',
    borderRadius: '10px',
    fontSize: '1rem',
    transition: 'all 0.2s',
    outline: 'none'
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '8px'
  };

  if (paymentSuccess) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9fafb',
        padding: '20px'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '48px',
          borderRadius: '16px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          maxWidth: '500px'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#10b981',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px'
          }}>
            <Check size={48} color="white" />
          </div>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '16px'
          }}>
            Payment Successful!
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#6b7280',
            marginBottom: '24px'
          }}>
            Thank you for your purchase. You now have full access to our learning platform.
          </p>
          <div style={{
            backgroundColor: '#f3f4f6',
            padding: '16px',
            borderRadius: '12px',
            marginBottom: '24px'
          }}>
            <p style={{ color: '#374151', fontWeight: '600', margin: 0 }}>
              {planDetails.name} - {planDetails.price}
            </p>
          </div>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
            Redirecting to home page...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              color: '#6b7280',
              fontSize: '1rem',
              cursor: 'pointer',
              padding: '8px 12px',
              borderRadius: '8px',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
              e.currentTarget.style.color = '#7e11d6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#6b7280';
            }}
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#111827',
            marginTop: '16px',
            marginBottom: '8px'
          }}>
            Complete Your Purchase
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#6b7280'
          }}>
            Secure checkout powered by industry-leading encryption
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '32px'
        }}>
          {/* Payment Form */}
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '16px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            height: 'fit-content'
          }}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '24px'
            }}>
              Payment Details
            </h2>

            {/* Payment Method Selection */}
            <div style={{ marginBottom: '32px' }}>
              <label style={labelStyle}>Payment Method</label>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px'
              }}>
                {['card', 'swish', 'klarna'].map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setPaymentMethod(method as any)}
                    style={{
                      padding: '16px',
                      border: `2px solid ${paymentMethod === method ? '#7e11d6' : '#e5e7eb'}`,
                      borderRadius: '12px',
                      backgroundColor: paymentMethod === method ? '#f3e8ff' : 'white',
                      color: paymentMethod === method ? '#7e11d6' : '#6b7280',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      textTransform: 'capitalize'
                    }}
                  >
                    {method === 'card' ? (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <CreditCard size={20} />
                        Card
                      </div>
                    ) : method.charAt(0).toUpperCase() + method.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {paymentMethod === 'card' && (
                <>
                  {/* Card Number */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={labelStyle}>Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={cardDetails.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                      style={inputStyle}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#7e11d6'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                    />
                  </div>

                  {/* Cardholder Name */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={labelStyle}>Cardholder Name</label>
                    <input
                      type="text"
                      name="cardName"
                      value={cardDetails.cardName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      style={inputStyle}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#7e11d6'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                    />
                  </div>

                  {/* Expiry and CVV */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                    marginBottom: '24px'
                  }}>
                    <div>
                      <label style={labelStyle}>Expiry Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={cardDetails.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                        style={inputStyle}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#7e11d6'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        maxLength={4}
                        required
                        style={inputStyle}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#7e11d6'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                      />
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={labelStyle}>Billing Address</label>
                    <input
                      type="text"
                      name="billingAddress"
                      value={cardDetails.billingAddress}
                      onChange={handleInputChange}
                      placeholder="123 Main Street"
                      required
                      style={inputStyle}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#7e11d6'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                    />
                  </div>

                  {/* City and Postal Code */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr',
                    gap: '16px',
                    marginBottom: '32px'
                  }}>
                    <div>
                      <label style={labelStyle}>City</label>
                      <input
                        type="text"
                        name="city"
                        value={cardDetails.city}
                        onChange={handleInputChange}
                        placeholder="Stockholm"
                        required
                        style={inputStyle}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#7e11d6'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Postal Code</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={cardDetails.postalCode}
                        onChange={handleInputChange}
                        placeholder="12345"
                        required
                        style={inputStyle}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#7e11d6'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                      />
                    </div>
                  </div>
                </>
              )}

              {paymentMethod === 'swish' && (
                <div style={{
                  padding: '32px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '12px',
                  textAlign: 'center',
                  marginBottom: '32px'
                }}>
                  <p style={{ color: '#374151', fontSize: '1.1rem', fontWeight: '600', marginBottom: '16px' }}>
                    Swish Payment
                  </p>
                  <p style={{ color: '#6b7280' }}>
                    You will be redirected to Swish to complete your payment securely.
                  </p>
                </div>
              )}

              {paymentMethod === 'klarna' && (
                <div style={{
                  padding: '32px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '12px',
                  textAlign: 'center',
                  marginBottom: '32px'
                }}>
                  <p style={{ color: '#374151', fontSize: '1.1rem', fontWeight: '600', marginBottom: '16px' }}>
                    Klarna Payment
                  </p>
                  <p style={{ color: '#6b7280' }}>
                    Pay now or later with Klarna. You will be redirected to complete your payment.
                  </p>
                </div>
              )}

              {/* Security Notice */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                backgroundColor: '#f0fdf4',
                border: '2px solid #86efac',
                borderRadius: '12px',
                marginBottom: '24px'
              }}>
                <Lock size={24} color="#16a34a" />
                <p style={{ color: '#166534', fontSize: '0.9rem', margin: 0 }}>
                  Your payment information is encrypted and secure
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                style={{
                  width: '100%',
                  backgroundColor: isProcessing ? '#9ca3af' : '#7e11d6',
                  color: 'white',
                  padding: '18px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  cursor: isProcessing ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px'
                }}
                onMouseEnter={(e) => {
                  if (!isProcessing) {
                    e.currentTarget.style.backgroundColor = '#6b0fb8';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(126, 17, 214, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isProcessing) {
                    e.currentTarget.style.backgroundColor = '#7e11d6';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {isProcessing ? (
                  <>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '3px solid white',
                      borderTopColor: 'transparent',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    Processing...
                  </>
                ) : (
                  <>
                    <Lock size={20} />
                    Pay {planDetails.price}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '16px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            height: 'fit-content',
            position: 'sticky',
            top: '20px'
          }}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '24px'
            }}>
              Order Summary
            </h2>

            {/* Plan Details Card */}
            <div style={{
              backgroundColor: '#f9fafb',
              padding: '24px',
              borderRadius: '12px',
              marginBottom: '24px',
              border: '2px solid #e5e7eb'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#7e11d6',
                  margin: 0
                }}>
                  {planDetails.name}
                </h3>
                <p style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: '#7e11d6',
                  margin: 0
                }}>
                  {planDetails.price}
                </p>
              </div>
              <p style={{
                color: '#6b7280',
                fontSize: '0.95rem',
                marginBottom: '16px'
              }}>
                Duration: {planDetails.duration}
              </p>
              <div style={{
                borderTop: '1px solid #e5e7eb',
                paddingTop: '16px'
              }}>
                <p style={{
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '12px'
                }}>
                  Includes:
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {planDetails.features.map((feature, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#374151',
                      marginBottom: '8px',
                      fontSize: '0.95rem'
                    }}>
                      <Check size={16} color="#10b981" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Price Breakdown */}
            <div style={{
              borderTop: '2px solid #e5e7eb',
              paddingTop: '24px',
              marginBottom: '24px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '12px'
              }}>
                <span style={{ color: '#6b7280' }}>Subtotal</span>
                <span style={{ color: '#374151', fontWeight: '600' }}>{planDetails.price}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '12px'
              }}>
                <span style={{ color: '#6b7280' }}>Tax (25% VAT)</span>
                <span style={{ color: '#374151', fontWeight: '600' }}>
                  {(parseFloat(planDetails.price.replace(/[^\d]/g, '')) * 0.25).toFixed(0)} SEK
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '12px',
                borderTop: '2px solid #e5e7eb'
              }}>
                <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#111827' }}>Total</span>
                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#7e11d6' }}>
                  {planDetails.price}
                </span>
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div style={{
              backgroundColor: '#ecfdf5',
              padding: '20px',
              borderRadius: '12px',
              border: '2px solid #86efac'
            }}>
              <p style={{
                color: '#065f46',
                fontSize: '0.95rem',
                fontWeight: '600',
                textAlign: 'center',
                margin: 0
              }}>
                🛡️ 30-Day Money-Back Guarantee
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation for spinner */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CheckoutPage;
