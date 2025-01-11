// Footer.jsx
import React from 'react';
import './Footer.css'; // Optional: Create a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Lakshika Bandara. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/lakshika-bandara-845607219/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Lakshi99" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
