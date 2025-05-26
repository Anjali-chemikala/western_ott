import React, { useState } from "react";
import "./Accountsettings.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "./Navbar";

export default function AccountSettings() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState("/pictures/img1.png");
  const [fullName, setFullName] = useState("Anjali Reddy");
  const [email] = useState("pushpanjalichemikala@gmail.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      toast.success("Profile picture updated!");
    }
  };

  const goBack = () => {
    window.scrollTo(0, 0);
    navigate(-1);
  };

  const handleSave = () => {
    if (!fullName || !email || !currentPassword || !newPassword || !confirmPassword) {
      toast.error("All fields are required!");
      return;
    }

    if (!validateName(fullName)) {
      toast.error("Full name must contain only letters.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Enter a valid email address.");
      return;
    }

    if (!validatePassword(newPassword)) {
      toast.error("Password must be at least 8 characters with an uppercase letter and a number.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirmation do not match.");
      return;
    }

    if (newPassword === currentPassword) {
      toast.error("New password must be different from current password.");
      return;
    }

    toast.success("Profile updated successfully!");
    setIsEditing(false);

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    setTimeout(() => {
      navigate("/profile");
    }, 1500);
  };

  return (
    <div className="hell">
      <Navbar/>
      <button className="mt-2" onClick={goBack}>Back</button>
      <div className="account-settings-container">
        <ToastContainer position="top-right" autoClose={3000} />
        <h2 className="title">Account Settings</h2>

        <div className="ac-card">
          <h3 className="subtitle">Profile Info</h3>
          <div className="profile-row">
            <img src={profileImage} alt="Profile" className="profile-image" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="upload"
            />
            <label htmlFor="upload" className="button">Change Photo</label>
          </div>
          <div className="input-grid">
            <input
              type="text"
              placeholder="Full Name"
              className="input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={!isEditing}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input"
              value={email}
              readOnly
            />
          </div>
        </div>

        <div className="ac-card">
          <h3 className="subtitle">Change Password</h3>
          <div className="input-grid">
            <div className="password-wrapper">
              <input
                type={showCurrentPassword ? "text" : "password"}
                placeholder="Current Password"
                className="input"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                disabled={!isEditing}
              />
              <span
                className="toggle-icon"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="password-wrapper">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                className="input"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                disabled={!isEditing}
              />
              <span
                className="toggle-icon"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm New Password"
                className="input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={!isEditing}
              />
              <span
                className="toggle-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
        </div>

        <div className="save-row">
          {!isEditing && (
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
          )}
          {isEditing && (
            <button className="save-button" onClick={handleSave}>
              Save Changes
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
