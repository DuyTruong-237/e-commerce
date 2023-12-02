import React, { useState, useEffect } from 'react';
import chatIcon from '../ListItem-Cart/chat-bubbles-with-ellipsis.png'
import shopIcon from '../BriefShop/shop.png'
import brideVoTri from '../ListItem-Cart/screenshot_1701161615.png'
import nucuoituthien from '../ListItem-Cart/387501171_1649638692106947_6854831053234935170_n.jpg'
import './ListItem.css'

export default function
  () {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const productPrices = document.querySelectorAll('.listProductPrice-Container div');
    let sum = 0;
    productPrices.forEach((price) => {
      sum += parseFloat(price.textContent.replace('$', ''));
    });
    setTotalPrice(sum);
  }, []);

  return (
    <div className='listItem-Wrapper'>
      <div className='shopPart-Wrapper'>
        <div className='pdShopPart'>
          <div className='shopPart-Container'>
            <div className='preferShop'>
              Yêu thích
            </div>
            <span className='nameShop'> Họa cụ Da Đen</span>
            <div className='chatBtn-Wrapper'>
              <img className='chatBtn' src={chatIcon} alt="" />
              Chat
            </div>
            <div className='connectShop_Btn'>
              <img src={shopIcon} alt="" />
              Xem Shop
            </div>
          </div>
          <div className='ratingPurchase'>
            ĐÁNH GIÁ
          </div>
        </div>
        <div className='listProduct-Wrapper'>
          <div className='listProductContent-Wrapper'>
            <div className='listProductImg-Container'>
              <img className='listProductImg' src={brideVoTri} alt="" />
            </div>
            <div className='listProductContent-Container'>
              <div>Chú Rể Vô Tri Đắk Nông Lương 50 Trẹo</div>
              <div>Phân loại hàng: 1m68 20cm</div>
              <div>x1</div>
            </div>
          </div>
          <div className='listProductPrice-Container'>
            <div>10000$</div>
          </div>
        </div>
        <div className='listProduct-Wrapper'>
          <div className='listProductContent-Wrapper'>
            <div className='listProductImg-Container'>
              <img className='listProductImg' src={nucuoituthien} alt="" />
            </div>
            <div className='listProductContent-Container'>
              <div>Nụ Cười Từ Thiện Gia Lai</div>
              <div>Phân loại hàng: 1m48</div>
              <div>x1</div>
            </div>
          </div>
          <div className='listProductPrice-Container'>
            <div>10$</div>
          </div>
        </div>
      </div>
      <div className='reconnectPart-Wrapper'>
        <div className='totalPrice-Oder' id='totalPrice'>
          <span className="total-price-value">{totalPrice.toFixed(2)}$</span>
        </div>
        <div className='reconnectButtonPart'>
          <div>Buy Again</div>
          <div>Contact Seller</div>
          <div>View Shop Rating</div>
        </div>
      </div>


    </div>
  )
}