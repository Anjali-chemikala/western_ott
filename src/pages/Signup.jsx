import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import "./Signup.scss";

const RevolverIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#CC5500"
    viewBox="0 0 24 24"
    width="20px"
    height="20px"
  >
    <path d="M21.707 7.293a1 1 0 0 0-1.414 0l-2.99 2.99-2.121-2.122 2.99-2.99a1 1 0 0 0 0-1.414l-3.536-3.535-6.364 6.364L4.222 7.828a1 1 0 0 0 0 1.414l3.536 3.535-2.99 2.99a1 1 0 0 0 0 1.414l3.536 3.536a1 1 0 0 0 1.414 0l2.99-2.99 3.535 3.535a1 1 0 0 0 1.414 0l2.121-2.121a1 1 0 0 0 0-1.414l-3.535-3.535 2.99-2.99a1 1 0 0 0 0-1.414z" />
  </svg>
);

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmailOrPhone = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    if (!emailRegex.test(value) && !phoneRegex.test(value)) {
      return "Enter a valid email or 10-digit phone number.";
    }
    return "";
  };

  const validatePassword = (value) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(value)) {
      return "Password must be 8+ chars, include uppercase, number & special char.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailOrPhoneError = validateEmailOrPhone(emailOrPhone);
    const passwordError = validatePassword(password);
    const confirmPasswordError =
      password !== confirmPassword ? "Passwords do not match." : "";

    setErrors({
      emailOrPhone: emailOrPhoneError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    if (!emailOrPhoneError && !passwordError && !confirmPasswordError) {
      toast.success("Account created successfully!", { position: "top-right" });
      setTimeout(() => navigate("/"), 1500);
    } else {
      toast.error("Please fill all the details correctly.", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="signup-screen">
      <ToastContainer />
      <div className="left-panel">
        <img
          src="/pictures/bg3.jpg"
          alt="Western Luffy"
          className="character-img"
        />
      </div>
      <div className="right-panel" >
      {/* <img
          src="/pictures/bg1.png"
          alt="Western Luffy"
          className="character-img"
        /> */}
        <form className="signup-form" onSubmit={handleSubmit}>
        {/* <img
          src="/pictures/bg1.png"
          alt="Western Luffy"
          className="character-img"
        /> */}
          <h2 className="form-title">Create Account</h2>

          <label>Email or Phone Number</label>
          <input
            type="text"
            placeholder="Enter your email or phone number"
            value={emailOrPhone}
            onChange={(e) => {
              const input = e.target.value;
              const isNumeric = /^\d+$/;

              if (isNumeric.test(input)) {
                if (input.length <= 10) {
                  setEmailOrPhone(input);
                } else {
                  toast.error("Phone number must be exactly 10 digits.", {
                    position: "top-right",
                  });
                }
              } else {
                setEmailOrPhone(input);
              }
            }}
          />
          {errors.emailOrPhone && (
            <p className="error-message">{errors.emailOrPhone}</p>
          )}

          <label>Password</label>
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a secure password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password-text"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <p className="error-message">{errors.password}</p>}

          <label>Confirm Password</label>
          <div className="input-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password-text"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword}</p>
          )}

          <button className="submit-btn" type="submit">
            <RevolverIcon /> Create Account
          </button>

          <p className="signup-footer">
            Already have an account?{" "}
            <a
              href="/signin"
              onClick={(e) => {
                e.preventDefault();
                navigate("/signin");
              }}
            >
              LOG IN
            </a>
          </p>
        <p className="social-heading">Or sign up with</p>

          <div className="social-icons">
          <a href="https://accounts.google.com/" target="_blank" rel="noreferrer">
            <FaGoogle size={24} />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitter size={24} />
          </a>
        </div>
        </form>
        
               
      </div>
    </div>
  );
};

export default Signup;
