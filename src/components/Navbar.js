import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  // Estado para controlar o modo escuro/claro
  const [darkMode, setDarkMode] = useState(false);

  // UseEffect para aplicar ou remover a classe 'dark-mode' ao body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header className="navbar">
      {/* Nome do site */}
      <div className="navbar-logo">Bitcoin Analytics</div>

      {/* Links de navegação */}
      <nav className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
      </nav>

      {/* Botão para alternar entre dark/light mode */}
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
