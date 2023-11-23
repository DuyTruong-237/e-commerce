import React from "react";
import './CartCheckout.css';

export default function CartCheckout() {
    return (
        <div class="pdCheckoutWrapper">
            <div class="a-cardui-body a-scroller-none">
                <form id="gutterCartViewForm" class="gutterCartViewForm" method="post" action="#">
                    <div class="ctgutter">
                    <div  class="pricetotal">
                        <span class="ttTotal">Subtotal<span>(2 item) </span>: </span> 
                        <span>$45.55</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
} 