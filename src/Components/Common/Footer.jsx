import React from 'react';
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="logo.png" alt="Face" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="logo.png" alt="Twit" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="logo.png" alt="Inst" />
          </a>
          {/* Add more social media icons as needed */}
        </div>

        <div className="company-info">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
