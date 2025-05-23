import React, { useState } from 'react';
import './Payment.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../pages/Navbar'


const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: ''
  });
  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const handleNameChange = (e) => {
    const regex = /^[a-zA-Z\s]*$/;
    const val = e.target.value;
    if (val === '' || regex.test(val)) {
      setCardDetails({ ...cardDetails, name: val });
    } else {
      toast.error('Name can only contain letters and spaces');
    }
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;

    if (name === 'number') {
      const digitsOnly = value.replace(/\D/g, '');
      if (digitsOnly.length <= 16) {
        setCardDetails({ ...cardDetails, number: digitsOnly });
      } else {
        toast.error('Card number cannot exceed 16 digits');
      }
    } else if (name === 'cvv') {
      const digitsOnly = value.replace(/\D/g, '');
      if (digitsOnly.length <= 3) {
        setCardDetails({ ...cardDetails, cvv: digitsOnly });
      } else {
        toast.error('CVV cannot exceed 3 digits');
      }
    } else if (name === 'expiry') {
      let allowedChars = value.replace(/[^0-9\/]/g, '');

      if (allowedChars.length > 5) {
        toast.error('Expiry date max length is 5 (MM/YY)');
        return;
      }

      const parts = allowedChars.split('/');
      const monthPart = parts[0];

      if (monthPart.length === 2) {
        const monthNum = parseInt(monthPart, 10);
        if (monthNum < 1 || monthNum > 12) {
          toast.error('Expiry month must be between 01 and 12');
          return;
        }
        if (allowedChars.length === 2) {
          allowedChars = allowedChars + '/';
        }
      }

      setCardDetails({ ...cardDetails, expiry: allowedChars });
    }
  };

  const handleUpiChange = (e) => {
    const val = e.target.value;
    const regex = /^[\w@.\-]*$/;
    if (val === '' || regex.test(val)) {
      setUpiId(val);
    } else {
      toast.error('Invalid character in UPI ID');
    }
  };

  const validateCard = () => {
    const { name, number, expiry, cvv } = cardDetails;
    if (!name || !number || !expiry || !cvv) {
      toast.error('Please fill all card details');
      return false;
    }
    if (number.length !== 16) {
      toast.error('Card number must be 16 digits');
      return false;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      toast.error('Expiry must be in MM/YY format');
      return false;
    }
    if (cvv.length !== 3) {
      toast.error('CVV must be 3 digits');
      return false;
    }
    return true;
  };

  const validateUPI = () => {
    if (!upiId || !/^[\w.-]+@[\w.-]+$/.test(upiId)) {
      toast.error('Enter valid UPI ID');
      return false;
    }
    return true;
  };

  const validateNetbanking = () => {
    if (!selectedBank) {
      toast.error('Please select a bank');
      return false;
    }
    return true;
  };

  const handlePayment = () => {
    let isValid = false;
    if (selectedMethod === 'card') isValid = validateCard();
    else if (selectedMethod === 'upi') isValid = validateUPI();
    else if (selectedMethod === 'netbanking') isValid = validateNetbanking();

    if (isValid) {
      toast.success(`Payment processed via ${selectedMethod.toUpperCase()}`);
    }
  };

  return (
    <div className='pay'>
      <Navbar />
    <div className="payment-container">
    
      <div className="payment-card">
        <h2 className="payment-title">Choose Payment Method</h2>

        <div className="payment-methods">
          {['card', 'upi', 'netbanking'].map((method) => (
            <button
              key={method}
              onClick={() => setSelectedMethod(method)}
              className={`payment-button ${selectedMethod === method ? 'active' : ''}`}
            >
              {method.toUpperCase()}
            </button>
          ))}
        </div>

        {selectedMethod === 'card' && (
          <div className="card-inputs">
            <input
              name="name"
              type="text"
              placeholder="Name on Card"
              value={cardDetails.name}
              onChange={handleNameChange}
              maxLength={30}
            />
            <input
              name="number"
              type="text"
              placeholder="Card Number"
              value={cardDetails.number}
              onChange={handleCardChange}
              maxLength={16}
            />
            <div className="card-row">
              <input
                name="expiry"
                type="text"
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={handleCardChange}
                maxLength={5}
              />
              <input className='cvvv'
                name="cvv"
                type="password"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={handleCardChange}
                maxLength={3}
              />
            </div>
          </div>
        )}

        {selectedMethod === 'upi' && (
          <input
            type="text"
            placeholder="Enter UPI ID"
            className="upi-input"
            value={upiId}
            onChange={handleUpiChange}
            maxLength={50}
          />
        )}

        {selectedMethod === 'netbanking' && (
          <select
            className="netbanking-select"
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
          >
            <option value="">Select Bank</option>
            <option value="SBI">SBI</option>
            <option value="ICICI">ICICI</option>
            <option value="HDFC">HDFC</option>
            <option value="Axis">Axis</option>
          </select>
        )}

        <button className="pay-now-button" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
      <ToastContainer position="top-right" />
    </div>
    </div>
  );
};

export default PaymentMethod;
