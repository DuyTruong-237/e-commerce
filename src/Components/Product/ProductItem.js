import React from 'react'
import ItemProduct from '../ItemProducts/ItemProducts'
import ProductSlider from "./ProductSlider"
import "./ProductItem.css"
import coupon from "../../Assets/Images/coupon.svg"

export default function ProductItem(){
    return(
      <div>
       <div class="containerP">
        {/* TOP PRODUCT ITEM */}
        <div class="PITop">
            <div class="sliderWrapper">
                <ProductSlider/>
            </div>
        </div>
           {/* BOT  PRODUCT ITEM */}
        <div class="PIBot">
            <div class="productName">
                <h3 class="nameItem" id='nameProduct'>SON MAC NHUNG DO</h3>
            </div>
            <div class="productCoupon">
                <img class="cpSale" id="couponProduct"src={coupon} /> 
            </div>
            <div class="productPrice" >
                <div class="pastPrice pastPrice1">
                <span aria-label="Past price"></span>
                <span class="iconPrice">₫</span>
                <span class="ppPrice">69.000</span>
                
                </div>
            </div>
        </div>
       </div>

      </div>
    )
}