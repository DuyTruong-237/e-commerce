import "./ShopCart.css"
import React from 'react'


export default function ShopCart() {

  
  return (
    <div className="ShopCart-body">
      <div className="SC-left-content">
        <div className="SC-content-item">
          <img className="SC-item-icon" src="https://parex.co.nz/wp-content/uploads/2022/07/Shop_Black_Icons.png"/>
          <div className="SC-item-title">Sản phẩm:</div>
          <div className="SC-item-info">20</div>
        </div>
        <div className="SC-content-item">
          <img className="SC-item-icon" src="https://parex.co.nz/wp-content/uploads/2022/07/Shop_Black_Icons.png"/>
          <div className="SC-item-title">Tỉ lệ phản hồi chat:</div>
          <div className="SC-item-info">20</div>
        </div>
        <div className="SC-content-item">
          <img className="SC-item-icon" src="https://parex.co.nz/wp-content/uploads/2022/07/Shop_Black_Icons.png"/>
          <div className="SC-item-title">Sản phẩm:</div>
          <div className="SC-item-info">20</div>
        </div>

      </div>
      <div className="SC-imga"><img className="SC-avatar" src="https://demoda.vn/wp-content/uploads/2022/04/avatar-dep-anime.jpg"/></div>
      <div className="SC-right-content">
          <div className="SC-nameshop">
            Shop Vipp
          </div>
          <div className="SC-buttons">
            <div className="Sc-button">+ Follow</div>
            <div className="Sc-button"><img className="SC-chaticon" src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/chat-1024.png"/>Chat</div>
          </div>
      </div>

    </div>
  )
}
