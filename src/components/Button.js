import React from "react";
import styles from "./Button.module.css"; // Importando o CSS Modules

const Button = ({ primary, size, children }) => {
  const buttonClass = `${styles.btn} ${
    primary ? styles.primary : styles.secondary
  } ${styles[size]}`;

  return <button className={buttonClass}>{children}</button>;
};

export default Button;
