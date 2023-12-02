import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './ProductSlider.css';
import son1 from '../../Assets/Images/Product Images/son1.png';
import son2 from '../../Assets/Images/Product Images/son2.png';
import son3 from '../../Assets/Images/Product Images/son3.png';



const ImageSlider = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = props.images;
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
     
      <img onClick={nextImage} src={images[currentImage]} alt={`Slide ${currentImage}`} />
      
    </div>
  );
};

export default ImageSlider;
