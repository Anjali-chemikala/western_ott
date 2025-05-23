import React from 'react';
import './Footer.scss';
import { Parallax } from 'react-parallax';
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <Parallax
      bgImage="https://i.pinimg.com/originals/73/5d/14/735d14bea3b2f809231fea81287e5feb.gif"
      strength={400}
      bgImageStyle={{ objectFit: 'cover' }}
    >
      <footer className="footer">
        <div className="footer__brand">
          <div className="ff-logo">
            <img src="./pictures/img1.png" alt="Western OTT" className="logo" />
            <span>
              <p>Stream the wild frontier—anytime, anywhere.</p>
            </span>
          </div>
        </div>

        <div className="footer__grid">
          <div className="col">
            <h4 className="exp">Explore</h4>
            <a href="/home">Home</a>
            <a href="/movies">Movies</a>
            <a href="/series">Series</a>
            <a href="/live">Live&nbsp;TV</a>
          </div>

          <div className="col">
            <h4 className="exp">Services</h4>
            <a href="/subscribe">Plans &amp; Pricing</a>
            <a href="/devices">Supported Devices</a>
            <a href="/download">Offline Downloads</a>
            <a href="/gift">Gift Cards</a>
          </div>

          <div className="col">
            <h4 className="exp">Help</h4>
            <a href="/support">Support Center</a>
            <a href="/faq">FAQs</a>
            <a href="/contact">Contact Us</a>
            <a href="/accessibility">Accessibility</a>
          </div>

          <div className="col">
            <h4 className="exp">Legal</h4>
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/cookies">Cookie Policy</a>
            <a href="/dmca">DMCA</a>
          </div>

          <div className="col">
            <h4 className="exp">Follow Us</h4>
            <div className="social">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <p className="copy">
          © {new Date().getFullYear()} Western OTT&nbsp;•&nbsp;All rights reserved.
        </p>
      </footer>
    </Parallax>
  );
};

export default Footer;
