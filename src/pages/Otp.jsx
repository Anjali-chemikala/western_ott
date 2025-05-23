import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Otp.scss';

function Otp() {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email || '';
    const [otp, setOtp] = useState(new Array(4).fill(''));
    const inputRefs = useRef([]);

    const handleChange = (element, index) => {
        const value = element.value.replace(/[^0-9]/g, '');
        if (!value) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (index < 3) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            const newOtp = [...otp];
            newOtp[index] = '';
            setOtp(newOtp);
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredOtp = otp.join('');
        if (enteredOtp.length < 4) {
            toast.error('Please enter the complete 4-digit OTP.');
            return;
        }

        toast.success(`OTP Verified Successfully! Entered OTP: ${enteredOtp}`);

        setTimeout(() => {
            navigate('/reset', { state: { email } });
        }, 1500);
    };

    return (
        <div className="otp-container">
            <div className="otp-box">
                <h2 className="otp-heading">OTP VERIFICATION</h2>
                <h5 className="otp-subheading">Enter your OTP {email}</h5>

                <form onSubmit={handleSubmit}>
                    <div className="otp-inputs">
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                className="otp-input"
                                value={data}
                                onChange={(e) => handleChange(e.target, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(el) => (inputRefs.current[index] = el)}
                            />
                        ))}
                    </div>
                    <div className="otp-button-wrapper">
                        <button type="submit" className="otp-button">
                            Verify OTP
                        </button>
                    </div>
                </form>

                <ToastContainer />
                
            </div>
        </div>
    );
}

export default Otp;
