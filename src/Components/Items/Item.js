import React from 'react';
import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { addToCart } from '../../data';
import { useNavigate } from 'react-router-dom';
import './Item.css';
import "../../Assets/font-icons/themify-icons-font/themify-icons/themify-icons.css";
// import exItem from '../Items/vn-11134207-7r98o-llt6eul6d7tr35.jpg';
import ratingStar from '../Items/star.png';
import freeShipIcon from '../Items/d9e992985b18d96aab90969636ebfd0e.png';
import imageSlider1 from '../Items/vn-11134207-7r98o-llt6eul6d7tr35.jpg';
import imageSlider2 from '../Items/vn-11134207-7r98o-llt6eul6eme758.jpg';
import imageSlider3 from '../Items/vn-11134207-7r98o-llt6eul6g0yn0d.jpg';
import imageSlider4 from '../Items/vn-11134207-7r98o-llt6pq256m734f.jpg';
import imageSlider5 from '../Items/vn-11134207-7r98o-llt6pq256m734f.jpg';
import messLogo from '../Items/messenger.png';
import fbLogo from '../Items/facebook.png';
import pinterestLogo from '../Items/pinterest.png';
import xLogo from '../Items/twitter.png';

export default function () {
  const location = useLocation();
  const selectedProduct = location.state?.selectedProduct;
  const [mainImage, setMainImage] = useState(selectedProduct.image[0]);
  const [hoveredImage, setHoveredImage] = useState(null);
  const navigate = useNavigate();
  const imgRefs = {
    slider1: useRef(null),
    slider2: useRef(null),
  };

  const handleImageClick = (index) => {
    setMainImage(selectedProduct.image[index]);
  };

  const handleBuyProduct = () => {
    addToCart(productArray);
    navigate('/cart');
    console.log(productArray);
  }

  const handleProductColorHover = (sliderKey) => {
    const newImage = imgRefs[sliderKey]?.current?.src;

    if (newImage) {
      setHoveredImage(newImage);
    }
  };

  const handleProductColorLeave = () => {
    setHoveredImage(null);
  };
  const {
    image,
    name,
    rate,
    reviews,
    sold,
    available,
    price
  } = selectedProduct;

  const productArray = [
    selectedProduct.image[0],
    selectedProduct.name,
    selectedProduct.price
  ];

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img key={i} className='ratingStarIcon' src={ratingStar} alt='' />);
    }
    return stars;
  };
  return (
    <div className='itemWrapper'>
      <div className='itemImage'>
        <div className='mainImage_Wrapper'>
          <img className='mainImage' src={mainImage} alt="Main Image"></img>
        </div>
        <div className='sliderImage_Wrapper'>
          {image.map((img, index) => (
            <img
              key={index}
              className='silderImage'
              src={img}
              alt={`Slider Image ${index}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <div className='utilities_Wrapper'>
          <div className='socialSharing'>
            <span>Share:</span>
            <img className='socialLogo' src={messLogo} ></img>
            <img className='socialLogo' src={fbLogo} ></img>
            <img className='socialLogo' src={pinterestLogo} ></img>
            <img className='socialLogo' src={xLogo} ></img>
          </div>
          <div className='wishList_Wrapper'>
            <span className='ti-heart'></span>
            <span>Favorites (1.9k)</span>
          </div>
        </div>
      </div>

      <div className='itemInfo_Wrapper'>
        <div className='itemName'>
          <span>{name}</span>
        </div>
        <div className='ratingItem'>
          <div className='ratingStar'>
            {renderRatingStars(rate)}
          </div>
          <button>
            <div><u>{rate}</u></div>
          </button>
          <button>
            <div className='ratingCount'><u>{reviews}</u> <span>Reviews</span></div>
          </button>
          <button>
            <div className='soldCount'> <u>{sold}</u> <span>Sold</span></div>
          </button>
        </div>
        <div className='priceItem'>
          {price}
        </div>
        <div className='itemInfo'>
          <div className='itemVoucher'>
            Shop Discount Code
            <div className='voucherTicket'>
              $50 Off
            </div>
            <div className='voucherTicket'>
              $50 Off
            </div>
            <div className='voucherTicket'>
              $50 Off
            </div>
          </div>
          <div className='itemInsurance'>
            Insurance
            <div> Mobile Device Insurance </div>
            <div> New </div>
            <div> Learn more </div>
          </div>
          <div className='itemShipping'>
            Shipping
            <img className='freeShipImg' src={freeShipIcon}></img>
            <span>Free Shipping</span>

          </div>
          <div className='itemColor'>
            <span>Color</span>
            <div>
              <button
                className='itemColor_btn'
                onMouseOver={() => handleProductColorHover('slider1')}
                onMouseLeave={handleProductColorLeave}
              >
                <img ref={imgRefs.slider1} className='productColor' src={imageSlider1} alt="Image 1"></img>
                <span>Titan - Green</span>
              </button>
              <button className='itemColor_btn'
                onMouseOver={() => handleProductColorHover('slider2')}
                onMouseLeave={handleProductColorLeave}
              >
                <img ref={imgRefs.slider2} className='productColor' src={imageSlider2} alt="Image 2" ></img>
                <span>Titan - Natural</span>
              </button>
              <button className='itemColor_btn'>
                <img className='productColor' src={imageSlider3} alt="Image 3" ></img>
                <span>Titan - White</span>
              </button>
              <button className='itemColor_btn'>
                <img className='productColor' src={imageSlider4} alt="Image 4" ></img>
                <span>Titan - Black</span>
              </button>
            </div>
          </div>
          <div className='itemQuantity'>
            <span>Quantity</span>
            <button className='decrease_btn'>
              <span className='ti-minus'></span>
            </button>
            <input className="itemQuantity_num" type="text" role="spinbutton" aria-live="assertive" aria-valuenow="1" value="1"></input>
            <button className='increase_btn'>
              <span className='ti-plus'></span>
            </button>
            <span className='available-product'>{available} available</span>
          </div>
        </div>
        <div className='buyModal'>
          <div className='addToCart'>
            <span className='ti-shopping-cart'> Add to Cart</span>
          </div>
          <div className='buyNow' onClick={() => handleBuyProduct (productArray)}>
            <span>Buy Now</span>
          </div>
        </div>
      </div>
    </div>
  );
}
