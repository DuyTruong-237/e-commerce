import React from 'react'
import chatIcon from '../ListItem-Cart/chat-bubbles-with-ellipsis.png'
import shopIcon from '../BriefShop/shop.png'
import './ListItem.css'

export default function
  () {
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
            <button className='connectProfile_Btn'>
              <img src={shopIcon} alt="" />
              Xem Shop
            </button>
          </div>
          <div className='ratingPurchase'>
            ĐÁNH GIÁ
          </div>
        </div>


      </div>

    </div>
  )
}
