import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Forgotpassword.scss';
import { useNavigate } from 'react-router-dom';

const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
      setError('Email is required');
      toast.error('Email is required');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      toast.error('Invalid email format');
      return;
    }

    setError('');
    toast.success('OTP sent successfully!');

    setTimeout(() => {
      navigate('/Otp', { state: { email } });
    }, 2000);
  };

  return (
    <div className="anjalii">
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>
        <div className="input-container">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error ? 'input-error' : ''}
            placeholder="Enter your email"
          />
          {error && <p className="error-message">{error}</p>}
        </div>
        <button onClick={handleSubmit}>Send OTP</button>
        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </div>
  );
};

export default Forgotpassword;
