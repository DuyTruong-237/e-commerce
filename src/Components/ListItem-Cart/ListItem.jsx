import React, { useState, useEffect } from 'react';
import chatIcon from '../ListItem-Cart/chat-bubbles-with-ellipsis.png'
import shopIcon from '../BriefShop/shop.png'
import brideVoTri from '../ListItem-Cart/screenshot_1701161615.png'
import nucuoituthien from '../ListItem-Cart/387501171_1649638692106947_6854831053234935170_n.jpg'
import './ListItem.css'
import { useNavigate } from 'react-router-dom';
import { ProductData } from '../../data';

export default function
  () {
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const productPrices = document.querySelectorAll('.listProductPrice-Container div');
    let sum = 0;
    productPrices.forEach((price) => {
      sum += parseFloat(price.textContent.replace('$', ''));
    });
    setTotalPrice(sum);
  }, []);

  const handleConnectShop = () => {
    navigate('/shop');
  }
  return (
    <div className='listItem-Wrapper'>
      <div className='shopPart-Wrapper'>
        <div className='pdShopPart'>
          <div className='shopPart-Container'>
            <div className='preferShop'>
              Yêu thích
            </div>
            <span className='nameShop'>PamPam Shop</span>
            <div className='chatBtn-Wrapper'>
              <img className='chatBtn' src={chatIcon} alt="" />
              Chat
            </div>
            <div className='connectShop_Btn' onClick={handleConnectShop}>
              <img src={shopIcon} alt="" />
              Xem Shop
            </div>
          </div>
          <div className='ratingPurchase'>
            ĐÁNH GIÁ
          </div>
        </div>
        {ProductData.map((item) => (
          <div className='listProduct-Wrapper'>
            <div className='listProductContent-Wrapper'>
              <div className='listProductImg-Container'>
                <img className='listProductImg' src={item.image[0]} alt="" />
              </div>
              <div className='listProductContent-Container'>
                <div>{item.name}</div>
                <div>x1</div>
              </div>
            </div>
            <div className='listProductPrice-Container'>
              <div>{item.price}</div>
            </div>
          </div>
        ))}
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