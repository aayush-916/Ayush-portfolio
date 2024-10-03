import React from 'react';
import '../App.css';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer' className="footer">
      <div className="container">
        <div className="footer-content">
          <h2>Ayush Kumar Dubey</h2>
          <p>Full Stack Web Developer | Data Scientist</p>

          <div className="footer-socials">
            <a href="https://github.com/aayush-916" target="_blank" rel="noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/aayush-kumar-3084b3253/" target="_blank" rel="noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://wa.me/+917542019191" target="_blank" rel="noreferrer">
              <FaWhatsapp size={30} />
            </a>
          </div>

          <div className="footer-contact">
            <a href="mailto:aayush91620@gmail.com"><FaEnvelope /> aayush91620@gmail.com</a>
            <a href="tel:7542019191"><FaPhone /> +91 7542019191</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Your Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
