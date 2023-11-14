import React from 'react'
import { useState } from 'react'
import './Item.css'
import exItem from '../Items/vn-11134207-7r98o-llt6eul6d7tr35.jpg'
import imageSlider1 from '../Items/vn-11134207-7r98o-llt6eul6d7tr35.jpg'
import imageSlider2 from '../Items/vn-11134207-7r98o-llt6eul6eme758.jpg'
import imageSlider3 from '../Items/vn-11134207-7r98o-llt6eul6g0yn0d.jpg'
import imageSlider4 from '../Items/vn-11134207-7r98o-llt6pq256m734f.jpg'
import imageSlider5 from '../Items/vn-11134207-7r98o-llt6pq256m734f.jpg'


export default function () {
  const [mainImage, setMainImage] = useState(exItem);

  const handleImageHover = (newImage) => {
    setMainImage(newImage);
  }
  return (
    <div className='itemWrapper'>
      <div className='itemImage'>
        <div className='mainImage_Wrapper'>
          <img className='mainImage' src={mainImage} alt="Main Image"></img>
        </div>
        <div className='sliderImage_Wrapper'>
          <img className='silderImage' src={imageSlider1} alt="Slider Image 1" onMouseOver={() => handleImageHover(imageSlider1)}></img>
          <img className='silderImage' src={imageSlider2} alt="Slider Image 2" onMouseOver={() => handleImageHover(imageSlider2)}></img>
          <img className='silderImage' src={imageSlider3} alt="Slider Image 3" onMouseOver={() => handleImageHover(imageSlider3)}></img>
          <img className='silderImage' src={imageSlider4} alt="Slider Image 4" onMouseOver={() => handleImageHover(imageSlider4)}></img>
          <img className='silderImage' src={imageSlider5} alt="Slider Image 5" onMouseOver={() => handleImageHover(imageSlider5)}></img>
        </div>
      </div>
      <div className='itemInfo_Wrapper'>
        <div className='itemName'>
          <span>Apple iPhone 15 Pro Max 256GB</span>
        </div>
        <div className='ratingItem'>
          {/* <button>
            <div>5.0</div>
            <div>
              <div className='ratingStar'></div>
            </div>
          </button>
          <button></button>
          <button></button> */}
        </div>
        <div className='priceItem'>
          ₫35.540.000 - ₫35.690.000
        </div>
        <div className='itemInfo'>
          <div className='itemVoucher'>
            Mã Giảm Giá Của Shop
            <div className='voucherTicket'>
              Giảm 50k
            </div>
            <div className='voucherTicket'>
              Giảm 50k
            </div>
            <div className='voucherTicket'>
              Giảm 50k
            </div>
          </div>
          <div className='itemInsurance'>
            Bảo Hiểm
            <div> Bảo Hiểm Thiết Bị Di Động </div>
            <div> Mới </div>
            <div> Tìm hiểu thêm </div>
          </div>
          <div className='itemShipping'>

          </div>
          <div className='itemColor'>

          </div>
          <div className='itemQuantity'>

          </div>
        </div>
        <div className='buyModal'>
          <div className='addToCart'>

          </div>
          <div className='buyNow'>

          </div>
        </div>
      </div>
    </div>
  )
}
