import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import "./Activeplan.scss";

const Activeplan = () => {
  const currentPlan = {
    name: "Mega Plan",
    price: "₹349 / month",
    expiryDate: "June 24, 2025",
    status: "Active",
  };

  const navigate = useNavigate();
  const today = new Date();
  const expiry = new Date(currentPlan.expiryDate);
  const daysLeft = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));
  const isExpired = daysLeft <= 0;

  const [showModal, setShowModal] = useState(false);
  const [modalDetails, setModalDetails] = useState({
    title: "",
    message: "",
    type: "",
  });

  const handleRenew = () => {
    if (!isExpired) {
      setModalDetails({
        title: "Warning",
        message: "You can only renew after your plan expires.",
        type: "warning",
      });
    } else {
      setModalDetails({
        title: "Success",
        message: "Your plan has been renewed!",
        type: "success",
      });
    }
    setShowModal(true);
  };

  const handleUpgrade = () => {
    setModalDetails({
      title: "Upgrade",
      message: "Upgrade options coming soon!",
      type: "success",
    });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="plan-wrapper">
      <div className="plan-nav" onClick={() => navigate('/profile?returnToStep2=true')}>
        <IoArrowBack size={28} />
      </div>

      <div className="plan-section">
        <h1 className="plan-heading">My Subscription</h1>

        <div className={`plan-box ${isExpired ? "plan-expired" : ""}`}>
          <div className="plan-box-top">
            <h2 className="plan-name">{currentPlan.name}</h2>
            <span className={`plan-status ${currentPlan.status.toLowerCase()}`}>
              {currentPlan.status}
            </span>
          </div>

          <p className="plan-price">{currentPlan.price}</p>
          <p className="plan-expiry">
            Valid Until: <strong>{currentPlan.expiryDate}</strong>
          </p>

          <p className={`plan-remaining ${isExpired ? "text-alert" : ""}`}>
            {isExpired
              ? "Subscription has expired."
              : `${daysLeft} day${daysLeft > 1 ? "s" : ""} remaining`}
          </p>

          <div className="plan-buttons">
            <button
              className={`plan-action-btn ${!isExpired ? "disabled-btn" : ""}`}
              onClick={handleRenew}
            >
              Renew Plan
            </button>
            {!isExpired && (
              <button className="plan-upgrade-btn" onClick={handleUpgrade}>
                Upgrade Plan
              </button>
            )}
          </div>
        </div>

        {showModal && (
          <div className="popup-backdrop">
            <div className={`popup-container ${modalDetails.type}`}>
              <div className="popup-header">
                <h3>{modalDetails.title}</h3>
                <button className="popup-close" onClick={handleCloseModal}>
                  &times;
                </button>
              </div>
              <div className="popup-body">
                <p>{modalDetails.message}</p>
              </div>
              <div className="popup-footer">
                <button className="popup-ok" onClick={handleCloseModal}>
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Activeplan;
