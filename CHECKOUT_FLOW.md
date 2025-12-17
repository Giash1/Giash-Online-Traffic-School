# Checkout Flow Documentation

## Overview
The checkout flow allows users to select a plan, register an account, and complete payment for their subscription.

## Flow Steps

### 1. **Landing Page** (`/`)
- User views pricing cards with 3 options:
  - 1 Month Plan: 149 SEK
  - 3 Months Plan: 299 SEK
  - 6 Months Plan: 499 SEK
- User clicks on a pricing card

### 2. **Registration Modal**
- Modal opens with selected plan displayed at the top
- User fills in registration form:
  - First Name
  - Last Name
  - Email Address
  - Phone Number (Optional)
  - Password
  - Confirm Password
- Selected plan is highlighted with purple theme
- User clicks "Create Account & Buy"

### 3. **Checkout Page** (`/checkout`)
- **Left Column - Payment Details:**
  - Payment method selection (Card, Swish, Klarna)
  - For Card payment:
    - Card Number (auto-formatted with spaces)
    - Cardholder Name
    - Expiry Date (MM/YY format)
    - CVV (3-4 digits)
    - Billing Address
    - City & Postal Code
  - Security notice with lock icon
  - "Pay [amount]" button with lock icon

- **Right Column - Order Summary:**
  - Selected plan details card
  - Plan name and price
  - Duration
  - Features list with checkmarks
  - Price breakdown:
    - Subtotal
    - Tax (25% VAT)
    - Total
  - 30-Day Money-Back Guarantee badge

### 4. **Payment Processing**
- User clicks "Pay" button
- Button shows loading spinner: "Processing..."
- Simulates 2-second payment processing

### 5. **Payment Success**
- Success screen with green checkmark
- "Payment Successful!" message
- Purchased plan summary
- Auto-redirects to dashboard after 2 seconds

### 6. **Dashboard** (`/dashboard`)
- User has full access to the learning platform

## Key Features

### Payment Methods
- **Card Payment**: Full form with validation and auto-formatting
- **Swish**: Shows redirect message (integration placeholder)
- **Klarna**: Shows redirect message (integration placeholder)

### Form Validation
- Card number: Auto-formats with spaces (1234 5678 9012 3456)
- Expiry date: Auto-formats as MM/YY
- CVV: Limits to 3-4 digits
- All fields required for card payment

### Security
- Lock icon on payment button
- Security notice: "Your payment information is encrypted and secure"
- Green badge for money-back guarantee

### Responsive Design
- 2-column layout on desktop
- Stacks to single column on mobile
- Sticky order summary on desktop

### Styling
- Consistent purple theme (#7e11d6)
- Smooth hover effects on buttons
- Professional card-based layout
- Clear visual hierarchy

## Technical Implementation

### Routes
```typescript
/ - Landing page with pricing
/checkout - Payment page
/dashboard - User dashboard (after payment)
```

### State Management
- Plan details passed via React Router `location.state`
- Form state managed with React hooks
- Payment processing simulated with setTimeout

### Components
- `CheckoutPage.tsx` - Main checkout component
- `RegisterForm.tsx` - Updated to navigate to checkout
- `main.tsx` - Router configuration

### Navigation Flow
```
RegisterForm.handleSubmit() 
  → register user 
  → close modal 
  → navigate('/checkout', { state: { planDetails } })
```

## Future Enhancements
- Real payment gateway integration (Stripe, Klarna, Swish)
- Email confirmation after registration
- Receipt generation and email
- Invoice download
- Saved payment methods
- Promo code/discount functionality
- Multiple currency support
