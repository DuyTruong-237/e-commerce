import React, { useState, useEffect } from 'react';
import chatIcon from '../ListItem-Cart/chat-bubbles-with-ellipsis.png';
import shopIcon from '../BriefShop/shop.png';
import './ListItem.css';
import { useNavigate } from 'react-router-dom';
import { ProductData } from '../../data';

export default function ListItem() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [formattedTotalPrice, setFormattedTotalPrice] = useState('');
  const navigate = useNavigate();

  const countUniqueProductNames = () => {
    const uniqueNames = [...new Set(ProductData.map(item => item.name))];
    const nameCount = {};

    uniqueNames.forEach((name) => {
      const count = ProductData.filter(item => item.name === name).length;
      nameCount[name] = count;
    });

    return nameCount;
  };

  const uniqueNameCounts = countUniqueProductNames();
  console.log(uniqueNameCounts);

  useEffect(() => {
    const sum = ProductData.reduce((accumulator, item) => {
      const itemPrice = parseFloat(item.price.replace(/[.,₫]/g, '').trim());
      console.log(itemPrice);

      console.log(`Item: ${item.name}, Price: ${item.price}, Parsed Price: ${itemPrice}`);

      return isNaN(itemPrice) ? accumulator : accumulator + itemPrice;
    }, 0);

    const formattedTotalPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(sum);

    setTotalPrice(sum);
    setFormattedTotalPrice(formattedTotalPrice);
  }, []);

  const handleConnectShop = () => {
    navigate('/shop');
  };

  return (
    <div className='listItem-Wrapper'>
      <div className='shopPart-Wrapper'>
        <div className='pdShopPart'>
          <div className='shopPart-Container'>
            <div className='preferShop'>
              Favorite
            </div>
            <span className='nameShop'>PamPam Shop</span>
            <div className='chatBtn-Wrapper'>
              <img className='chatBtn' src={chatIcon} alt="" />
              Chat
            </div>
            <div className='connectShop_Btn' onClick={handleConnectShop}>
              <img src={shopIcon} alt="" />
              View Shop
            </div>
          </div>
          <div className='ratingPurchase'>
            RATINGS
          </div>
        </div>
        {Object.keys(uniqueNameCounts).map((name) => (
          <div key={name} className='listProduct-Wrapper'>
            <div className='listProductContent-Wrapper'>
              <div className='listProductImg-Container'>
                <img className='listProductImg' src={ProductData.find(item => item.name === name).image[0]} alt="" />
              </div>
              <div className='listProductContent-Container'>
                <div>{name}</div>
                <div>x{uniqueNameCounts[name]}</div>
              </div>
            </div>
            <div className='listProductPrice-Container'>
              <div>{ProductData.find(item => item.name === name).price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='reconnectPart-Wrapper'>
        <div className='totalPrice-Oder' id='totalPrice'>
          <span className="total-price-value">{formattedTotalPrice}</span>
        </div>
        <div className='reconnectButtonPart'>
          <div>Buy Again</div>
          <div>Contact Seller</div>
          <div>View Shop Rating</div>
        </div>
      </div>
    </div>
  );
}
