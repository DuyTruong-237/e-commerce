import React from 'react';
import ItemProducts from '../ItemProducts/ItemProducts';
import ProductSlider from "./ProductSlider";
import "./ProductItem.css";
import coupon from "../../Assets/Images/coupon.svg";
import love from "../../Assets/Images/love.svg";
import buy from "../../Assets/Images/shopping-bag.svg";


export default function ProductItem(props) {
    // Định nghĩa các giá trị cần truyền qua
    const productName = "SON eve MAC NHUNG li";
    const pastPrice = "69.000";
    const currentPrice = "59.000";

    return (
        <div>
            
            <div className="containerP">
                
                <div className="PITop">
                    <div className="sliderWrapper">
                        <ProductSlider images={props.images} />
                    </div>
                </div>
                <a >
                <div className="PIBot">
                    <div className="productName">
                        {/* Truyền giá trị thông qua props */}
                        <ItemProducts
                            name={props.name}
                        />
                         </div>
                        <div className="productCoupon">
                            <img className="cpSale" id="couponProduct" src={coupon} alt="Coupon" />
                        </div>
                        <ItemProducts
                            pastPrice={props.pastPrice}
                            currentPrice={props.currentPrice}
                        />
                        <div className="iconEnd">
                            <div className="iconlove">
                                <img src={love} className="icon" alt="Love" />
                            </div>
                            <div className="icon iconbuy">
                                <img src={buy} className="icon" alt="Buy" />
                            </div>
                        </div>

                   
                </div>
                </a>
            </div>
            
            

        </div>
    );
}
