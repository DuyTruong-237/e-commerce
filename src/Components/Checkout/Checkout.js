import React from "react";
import './Checkout.css'
import '../Cart/ActiveCart.css'
import CheckoutInfo from './CheckoutInfo'
import CartCheckout from "../Cart/CartCheckout";
export default function Checkout(){
    return(
        <div class="checkoutWrapper" id='checkoutWrapperId' >
            <div class="AC-Content mglr">
                <div class="AC-Header">
                    <h1 class="AC-Text">Checkout <span class="quantityItems">(2 item)</span> </h1>
                </div>
                <div class="AC-Body ">
                        <form class="formCheckout">
                            <div class="CheckoutWrapperContent">
                        <div class="CheckoutLeft bgWhite">
                            <CheckoutInfo/>
                        </div>
                       
                        <div class="CheckoutRight bgWhite">
                        <CartCheckout title="Place order"/>
                        </div>
                        </div>
                        </form>
                
                </div>
            </div>
        </div>
    )
}