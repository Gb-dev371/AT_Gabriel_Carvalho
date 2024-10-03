// Button.js
import React from "react";
import "./Button.css";

const Button = ({ primary, size, children }) => {
  return (
    <button
      className={`btn ${primary ? "btn-primary" : "btn-secondary"} ${size}`}
    >
      {children}
    </button>
  );
};

export default Button;
