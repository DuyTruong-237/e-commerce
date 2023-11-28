import React from 'react'
import chatIcon from '../ListItem-Cart/chat-bubbles-with-ellipsis.png'
import shopIcon from '../BriefShop/shop.png'
import brideVoTri from '../ListItem-Cart/screenshot_1701161615.png'
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
            <div>10.000$</div>
          </div>
        </div>


      </div>

    </div>
  )
}
