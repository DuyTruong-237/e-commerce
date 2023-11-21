// Slider.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './ProductSlider.css';
import son1 from '../../Assets/Images/Product Images/son1.png';
import son2 from '../../Assets/Images/Product Images/son2.png';
import son3 from '../../Assets/Images/Product Images/son3.png';

const images = [son1, son2, son3];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-slider">
      <button onClick={prevImage}><FontAwesomeIcon icon={faArrowLeft} /> </button>
      <img src={images[currentImage]} alt={`Slide ${currentImage}`} />
      <button onClick={nextImage}>
       <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default ImageSlider;