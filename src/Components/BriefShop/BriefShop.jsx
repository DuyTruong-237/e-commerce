import React from 'react'
import './BriefShop.css'
import avaShop from '../BriefShop/vn-11134216-7r98o-llx8zp2z3dnj5b_tn.jpg'
import mallTag from '../BriefShop/483071c49603aa7163a7f51708bff61b.png'
import chatIcon from '../BriefShop/chat.png'
import shopIcon from '../BriefShop/shop.png'


export default function briefShop() {
  return (
    <div className='briefInfo_Wrapper'>
      <a href='/shop' className='briefInfo_shopAvatar'>
        <img className='briefInfo_imgAvatar' src={avaShop} alt="" />
        <img className='briefInfo_mallTag' src={mallTag} alt="" />
      </a>
      <div className='briefInfo_shopName_Wrapper'>
        <div className='briefInfo_shopName'>
          <span>ShopDunk Official Store</span>
          <div className='onlineStatus'> Online 2 giờ trước </div>
          <div className='connectShop_Wrapper'>
            <button className='direct_Btn'>
              <img src={chatIcon} alt="" />
              Chat Ngay
            </button>
            <a href='/shop' className='connectProfile_Btn'>
              <img src={shopIcon} alt="" />
              Xem Shop
            </a>
          </div>
        </div>

      </div>
      <div className='shopRating_Wrapper'>
        <div className='shopRating'>
          <label className='ratingLabel'>Đánh Giá</label>
          <span>11,1k</span>
        </div>
        <div className='shopRating'>
          <label className='ratingLabel'>Tỉ Lệ Phản Hồi</label>
          <span>96%</span>
        </div>
        <div className='shopRating'>
          <label className='ratingLabel'>Tham GIa</label>
          <span>3 năm trước</span>
        </div>
        <div className='shopRating'>
          <label className='ratingLabel'>Sản Phẩm</label>
          <span>223</span>
        </div>
        <div className='shopRating'>
          <label className='ratingLabel'>Thời Gian Phản Hồi</label>
          <span>trong vài giờ</span>
        </div>
        <div className='shopRating'>
          <label className='ratingLabel'>Người Theo Dõi</label>
          <span>330,8k</span>
        </div>
      </div>
      <div></div>
    </div>
  )
}
