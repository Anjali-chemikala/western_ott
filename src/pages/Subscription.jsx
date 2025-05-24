import React from 'react';
import './Subscription.scss';
import Navbar from '../pages/Navbar'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';


const PlanSelection = () => {
  const navigate = useNavigate()
  return (
    <div className="main-container">
      <Navbar />
      <div className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="back-icon" size={24} />
      </div>
      <div className="hero">
        <h1>Unlock Unlimited Entertainment!</h1>
        <p>
          Choose a plan that fits your lifestyle and start streaming your favorite shows, movies, and exclusive originals anytime, anywhere. Get ready to experience entertainment like never before!
        </p>
        <h2>Pick Your Perfect Plan</h2>
      </div>

      <div className="plans">
       <div className="plan-cards">
        <h2>Basic Plan</h2>
          <h5>Start Small, Enjoy Big!</h5>
        <ul className='ok'>
          <li>Ideal for individuals who want to enjoy content on a single device without distractions.</li>
          <li>Stream on 1 device at a time</li>
          <li>Watch in SD quality for a seamless experience</li>
          <li>Ad-supported, providing you with content for less</li>
        </ul>
        <div className="price">Monthly Price: ₹199</div>
        <button onClick={() => navigate('/payment')}>Choose Basic Plan</button>
      </div>


        <div className="plan-cards">
          <h2>Standard Plan</h2>
          <h5>The Ultimate Streaming Duo!</h5>
          <ul className='ok'>
            <li>Perfect for couples or small families who enjoy streaming together.</li>
            <li>Stream on up to 2 devices at the same time</li>
            <li>Enjoy crisp HD quality for enhanced viewing pleasure</li>
            <li>Minimal ads so you can watch more uninterrupted</li>
          </ul>
  <div className="price">Monthly Price: ₹349</div>

          <button onClick={() => navigate('/payment')}>Choose Standard Plan</button>
        </div>

        <div className="plan-cards">
          <h2>Premium Plan</h2>
          <h5>The Ultimate Binge Package!</h5>
          <ul className='ok'>
            <li>Stream on up to 4 devices simultaneously—perfect for families or sharing with friends</li>
            <li>Enjoy stunning Ultra HD quality and crystal-clear visuals</li>
            <li>Enjoy an ad-free experience for uninterrupted viewing</li>
          </ul>
  <div className="price">Monthly Price: <span>₹499</span></div>

          <button onClick={() => navigate('/payment')}>Choose Premium Plan</button>
        </div>
      </div>

      <div className="free-trial">
        <h1>Your First Month Is on Us</h1>
        <p>
          Not sure yet? We’re offering your first month for free! Try any plan risk-free and cancel at any time. Dive into our world of endless entertainment and see for yourself!
        </p>
        <button onClick={() => navigate('/home')}>Start Your Free Trial</button>
      </div>
      <Footer />
    </div>
  );
};

export default PlanSelection;
