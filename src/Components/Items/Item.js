import React from 'react'
import { useState, useRef } from 'react'
import './Item.css'
import "../../Assets/font-icons/themify-icons-font/themify-icons/themify-icons.css"
import exItem from '../Items/vn-11134207-7r98o-llt6eul6d7tr35.jpg'
import ratingStar from '../Items/star.png'
import freeShipIcon from '../Items/d9e992985b18d96aab90969636ebfd0e.png'
import imageSlider1 from '../Items/vn-11134207-7r98o-llt6eul6d7tr35.jpg'
import imageSlider2 from '../Items/vn-11134207-7r98o-llt6eul6eme758.jpg'
import imageSlider3 from '../Items/vn-11134207-7r98o-llt6eul6g0yn0d.jpg'
import imageSlider4 from '../Items/vn-11134207-7r98o-llt6pq256m734f.jpg'
import imageSlider5 from '../Items/vn-11134207-7r98o-llt6pq256m734f.jpg'
import messLogo from '../Items/messenger.png'
import fbLogo from '../Items/facebook.png'
import pinterestLogo from '../Items/pinterest.png'
import xLogo from '../Items/twitter.png'


export default function () {
  const [mainImage, setMainImage] = useState(exItem);
  const [hoveredImage, setHoveredImage] = useState(null);
  const imgRefs = {
    slider1: useRef(null),
    slider2: useRef(null),
  };

  const handleImageHover = (newImage) => {
    setMainImage(newImage || hoveredImage || exItem);
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
        <div className='utilities_Wrapper'>
          <div className='socialSharing'>
            <span>Chia sẻ:</span>
            <img className='socialLogo' src={messLogo} ></img>
            <img className='socialLogo' src={fbLogo} ></img>
            <img className='socialLogo' src={pinterestLogo} ></img>
            <img className='socialLogo' src={xLogo} ></img>
          </div>
          <div className='wishList_Wrapper'>
            <span className='ti-heart'></span>
            <span>Đã thích (1,9k)</span>
          </div>
        </div>
      </div>

      <div className='itemInfo_Wrapper'>
        <div className='itemName'>
          <span>Apple iPhone 15 Pro Max 256GB</span>
        </div>
        <div className='ratingItem'>
          <div className='ratingStar'>
            <img src={ratingStar} className='ratingStarIcon'></img>
            <img src={ratingStar} className='ratingStarIcon'></img>
            <img src={ratingStar} className='ratingStarIcon'></img>
            <img src={ratingStar} className='ratingStarIcon'></img>
            <img src={ratingStar} className='ratingStarIcon'></img>
          </div>
          <button>
            <div><u>4.5</u></div>
          </button>
          <button>
            <div className='ratingCount'><u>1000</u> <span>Đánh giá</span></div>
          </button>
          <button>
            <div className='soldCount'> <u>2000</u> <span>Đã bán</span></div>
          </button>
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
            Vận chuyển
            <img className='freeShipImg' src={freeShipIcon}></img>
            <span>Miễn phí vận chuyển</span>

          </div>
          <div className='itemColor'>
            <span>Phân loại</span>
            <div>
              <button
                className='itemColor_btn'
                onMouseOver={() => handleProductColorHover('slider1')}
                onMouseLeave={handleProductColorLeave}
              >
                <img ref={imgRefs.slider1} className='productColor' src={imageSlider1} alt="Image 1"></img>
                <span>Titan - Xanh</span>
              </button>
              <button className='itemColor_btn'
                onMouseOver={() => handleProductColorHover('slider2')}
                onMouseLeave={handleProductColorLeave}
              >
                <img ref={imgRefs.slider2} className='productColor' src={imageSlider2} alt="Image 2" ></img>
                <span>Titan - Tự nhiên</span>
              </button>
              <button className='itemColor_btn'>
                <img className='productColor' src={imageSlider3} alt="Image 3" ></img>
                <span>Titan - Trắng</span>
              </button>
              <button className='itemColor_btn'>
                <img className='productColor' src={imageSlider4} alt="Image 4" ></img>
                <span>Titan - Đen</span>
              </button>
            </div>
          </div>
          <div className='itemQuantity'>
            <span>Số lượng</span>
            <button className='decrease_btn'>
              <span className='ti-minus'></span>
            </button>
            <input className="itemQuantity_num" type="text" role="spinbutton" aria-live="assertive" aria-valuenow="1" value="1"></input>
            <button className='increase_btn'>
              <span className='ti-plus'></span>
            </button>
            <span>4000 sản phẩm có sẵn</span>
          </div>
        </div>
        <div className='buyModal'>
          <div className='addToCart'>
            <span className='ti-shopping-cart'> Thêm Vào Giỏ Hàng</span>
          </div>
          <div className='buyNow'>
            <span>Mua Ngay</span>
          </div>
        </div>
      </div>
    </div>
  )
}
