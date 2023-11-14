import React from 'react'
import "./ProductItemNormal.css"
import  ProductItemSlider from "./ProductItemSlider"
export default function ProductItemNormal () {
    return (
        
            <div className="product-wrapper-item ">
        <div className="product-item-slider">
        <ProductItemSlider />
        </div>
      <div className="product-item-descrip">
        <div className="css-product-item">
        
        </div>
        <div className="css-product-item-price">
          <h2 className="product-item-price old-price">60đ</h2>
          <h2 className="product-item-price new-price">50đ</h2>
        </div>
        <div className="icon-product">
          <div className="coupon">
            <a className="img-icon voucher" href="#">Sale 10%</a>
          </div>
          <div className="wishlish">

              <img className="img-icon wishlist" src="" alt="wishlist" />
            
          </div>
          <div className="add">
            <button>
              <img className="img-icon img-buynow" src="/images/iconheader/white-shopping-bag.svg" alt="btn buy now" />
            </button>
          </div>
        </div>
      </div>
    </div>

    
    )}