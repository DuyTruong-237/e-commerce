import React, { useState, useEffect } from 'react'
import qc1 from "./nhy1.jpg"
import qc2 from "./nhy2.jpg"
import qc3 from "./nhy3.jpg"
import "./HomeEvent.css"

const images = [
  qc1,
  qc2,
  qc3,
  
  
  
  
 
  
];
export default function HomeEvent() {
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
    <div className="HE-body">
        <div className='HE-title'> PAMPAM  EVENT</div>
        <div className='br-line'></div>

        <div className='He-content'>
        <div className="He-slider">
        <div ><img className='He-sli-img' src={images[currentImageIndex]} alt="Slideshow" /></div>
    
        </div>
        <div className='event-content'>
            dssfdfgds

        </div>
        </div>
        
      
    </div>
  )
}