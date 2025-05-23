import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Resetpassword.scss';

function Resetpassword() {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email || '';

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const showError = (message) => {
        toast.error(message, {
            position: 'top-center',
            autoClose: 3000,
            pauseOnHover: true,
            theme: 'dark',
        });
    };

    const showSuccess = (message) => {
        toast.success(message, {
            position: 'top-center',
            autoClose: 2000,
            theme: 'dark',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newPassword.trim() || !confirmPassword.trim()) {
            showError('Please fill in all fields.');
            return;
        }

        if (newPassword !== confirmPassword) {
            showError('Passwords do not match!');
            return;
        }

        showSuccess('Password reset successful!');
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    return (
        <div className="reset-wrapper" 
        style={{
            // backgroundImage: "url('/assets/pictures/fbgimg.jpg')",
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            // overflowY: "hidden",
          }}
        >
            <ToastContainer />
            <div className="reset-card">
                <h2 className="title">Reset Password</h2>

                <div className="email-edit-section">
                    <span className="email-display">{email}</span>
                </div>

                <form onSubmit={handleSubmit} className="form">
                    <input
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="text-input"
                    />
                    <input
                        type="password"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="text-input"
                    />
                    <button type="submit" className="btn submit">Reset Password</button>
                </form>
            </div>
        </div>
    );
}

export default Resetpassword;
