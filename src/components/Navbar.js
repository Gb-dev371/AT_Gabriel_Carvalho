import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.webp";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para controlar o dropdown
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu hamburguer

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Bitcoin Analytics Logo" />
      </div>

      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="hamburger"></div>
      </div>

      {/* Links de navegação */}
      <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <a href="/">Home</a>

        {/* Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <button className="dropbtn">More</button>
          <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </nav>

      <div className="navbar-toggle">
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setDarkMode(!darkMode)}
            checked={darkMode}
          />
          <span className="slider"></span>
        </label>
      </div>
    </header>
  );
};

export default Navbar;
