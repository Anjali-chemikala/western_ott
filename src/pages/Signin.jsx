import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import "./Signin.scss";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


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
      return "Password must be 8+ characters, include an uppercase letter, number, and special character.";
    }
    return "";
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailOrPhoneError = validateEmailOrPhone(formData.email);
    const passwordError = validatePassword(formData.password);

    if (emailOrPhoneError) {
      toast.error(emailOrPhoneError, { position: "top-right" });
      return;
    }

    if (passwordError) {
      toast.error(passwordError, { position: "top-right" });
      return;
    }

    toast.success("Successfully signed in!", { position: "top-right" });
    setTimeout(() => navigate("/home"), 1500);
    console.log("Signin data:", formData);
  };

  return (
    <div className="signin-screen">
      <ToastContainer />
      <div className="left-panel">
        <img
          src="/pictures/bg3.jpg"
          alt="Western Luffy"
          className="character-img"
        />
      </div>

      <div className="right-panel">
        <form className="signin-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Sign In</h2>

          <label htmlFor="email">Email or Phone Number</label>
          <input
            id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email or phone number"
          />

          <label htmlFor="password">Password</label>
          <div className="input-wrapper">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="toggle-password-text"
              onClick={handleTogglePassword}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button type="submit" className="submit-btn">
            Sign In
            <FiLogIn size={22} />
          </button>
          <p className="signup-footer">
            <span className="reg" onClick={() => navigate("/forgot")}>
              Forgot Password?
            </span>
            
          </p>

          <p className="social-heading">Or sign in with</p>
          <div className="social-icons">
            <a
              href="https://accounts.google.com/"
              target="_blank"
              rel="noreferrer"
            >
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

          <p className="signin-footer">
            Don’t have an account? <a href="/">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
