import React from 'react'
import ItemProduct from '../ItemProducts/ItemProducts'
import ProductSlider from "./ProductSlider"
import "./ProductItem.css"
import coupon from "../../Assets/Images/coupon.svg"
import love from "../../Assets/Images/love.svg"
import buy from  "../../Assets/Images/shopping-bag.svg"

export default function ProductItem() {
    return (
        <div>
            <div class="containerP">
                {/* TOP PRODUCT ITEM */}
                <div class="PITop">
                    <div class="sliderWrapper">
                        <ProductSlider />
                    </div>
                </div>
                {/* BOT  PRODUCT ITEM */}
                <div class="PIBot">
                    <div class="productName">
                        <h3 class="nameItem" id='nameProduct'>SON eve MAC NHUNG DO</h3>
                    </div>
                    <div class="productCoupon">
                        <img class="cpSale" id="couponProduct" src={coupon} />
                    </div>
                    <div class="productPrice" >
                        <div class="pastPrice pastPrice1">
                            <span aria-label="Past price"></span>
                            <span class="iconPrice">₫</span>
                            <span class="ppPrice">69.000</span>
                        </div>
                        <div class="currentPrice currentPrice1">
                            <span aria-label="current Price"></span>
                            <span class="iconPrice1">₫</span>
                            <span class="ccPrice">59.000</span>
                        </div>
                    </div>
                    <div class="iconEnd">
                        <div class=" iconlove ">
                            <img src={love} class="icon"></img>
                        </div>
                        <div class="icon iconbuy ">
                        <img src={buy} class="icon"></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}