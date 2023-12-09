import React, { useState, useEffect } from 'react';
import './Slider.css'; 
import qc1 from "./qc1.jpg"
import qc2 from "./qc2.jpg"
import qc3 from "./qc3.png"
import qc4 from "./qc4.jpg"
import qc5 from "./qc5.jpg"
import qc6 from "./qc6.jpg"
import qc7 from "./qc7.jpg"
import img1 from "./coupon.svg"
import img2 from "./live.svg"
import img3 from "./free-shipping.svg"
import img4 from "./dollar.svg"
const images = [
  qc1,
  qc2,
  qc3,
  qc4,
  qc5,
  qc6,
  qc7,
  
];

function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className='main-slider'>
    <div className="slider">
      <img className='sli-img' src={images[currentImageIndex]} alt="Slideshow" />
    
    </div>
    
    <div className='slider2'>
      <img className='sli2-img' src={qc1} alt="Slideshow" />
      <div className='sli-items'>
        <div className='sli-item'>
            <img className='sli-item-img' src={img1}/>
    
            <div className='sli-item-name' >Voucher</div>
        </div>
        <div className='sli-item'>
            <img className='sli-item-img' src={img2}/>
            <div className='sli-item-name'>Live</div>
        </div>
        <div className='sli-item'>
            <img className='sli-item-img'src={img3}/>
            <div className='sli-item-name'>Miễn phí Ship
</div>
        </div>
        <div className='sli-item'>
            <img className='sli-item-img' src={img4}/>
            <div className='sli-item-name'>Coins Rewards</div>
        </div>
      </div>
    </div>
    
    </div>
  );
}

export default Slider;
