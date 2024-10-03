import React from "react";
import styles from "./Card.module.css"; // Importando como um módulo CSS

const Card = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
