import React, { useState } from "react";
import styles from "./ToggleSwitch.module.css"; // Importando o CSS Modules

const ToggleSwitch = () => {
  const [motivationalMode, setMotivationalMode] = useState(false);

  // Alterna entre duas frases motivacionais
  const toggleMotivation = () => {
    setMotivationalMode(!motivationalMode);
  };

  return (
    <div className={styles.container}>
      <h2>{motivationalMode ? "Bitcoin is cool" : "Bitcoin is great!"}</h2>{" "}
      {/* Tamanho do texto ajustado */}
      <label className={styles.switch}>
        <input
          type="checkbox"
          onChange={toggleMotivation}
          checked={motivationalMode}
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
