// Carousel.js
import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Prev</button>
      <img className="img" src={images[current]} alt="carousel" />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
