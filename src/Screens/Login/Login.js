import React,{ useState, useEffect }  from 'react'
import "./Login.css"
import fb from "./fb.png"
import tw from "./tw.png"

import gg from "./gg.webp"

import logo from "./2.png"
import qc1 from "./lg1.jpg"
import qc2 from "./lg2.jpg"
import qc3 from "./lg3.jpg"
import qc4 from "./lg4.jpg"
import qc5 from "./lg5.jpg"
import { Button } from 'bootstrap'

const images = [
  qc1,
  qc2,
  qc3,
  qc4,
  qc5,
 
  
  
  
 
  
];


  
export default function Login() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000); 

    return () => clearInterval(intervalId); 
  }, []);
  return (
    <div className='main-lg'>
        <div className="lg-bg">
        <img className='bg-lg-img' src={images[currentImageIndex]} alt="Slideshow" />
        <div className='cnt-lg-form'/>
        <div className='lg-form'>
            <div className='lg-ds'>
                <div className='lg-select'>
                    <img className='img-lg-t' src={fb}/>
                    <div className='lg-select-tt'>Facebook</div>

                </div>
                <div className='lg-select'>
                    <img className='img-lg-t' src={tw}/>
                    <div className='lg-select-tt'>Twiter</div>

                </div>
                <div className='lg-select'>
                    <img className='img-lg-t' src={gg}/>
                    <div className='lg-select-tt'>Google</div>

                </div>
            </div>
            <div className='lg-title'>
            <img className='lg-logo' src={logo}/>
            <div className='lg-login'>Login</div>
            <div className='lg-input'>
                <div className='ip-title'>Username</div>
                <input className='ip-enter'/>

            </div>
            <div className='lg-input'>
                <div className='ip-title'>Password</div>
                <input className='ip-enter'/>

            </div>
            <div className='lg-click'>
                <a className='lg-a'>Forgot password</a>
                <button className='lg-btn'>
                    Login
                </button>
            </div>
            
            </div>
            
            

        </div>
       
    </div>
    </div>
  )
}
