import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Usando React Icons para redes sociais

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Bitcoin Analytics</h3>
        <p>
          Providing the best analysis and insights into Bitcoin and blockchain
          technology.
        </p>
        <div className="socials">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Bitcoin Analytics. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
