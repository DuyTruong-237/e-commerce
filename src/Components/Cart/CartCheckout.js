import React from "react";
import './CartCheckout.css';
import './ActiveCart.css'

export default function CartCheckout() {
    return (
        <div class="pdCheckoutWrapper">
            <div class="a-cardui-body a-scroller-none">
                <form id="gutterCartViewForm" class="gutterCartViewForm" method="post" action="#">
                    <div class="ctgutter">
                        <div class="pricetotal">
                            <span class="ttTotal">Subtotal<span>(2 item) </span>: </span>
                            <span>$45.55</span>
                        </div>
                        <div class="cbgift">
                            <label class="stardust-checkbox">
                                <input class="stardust-checkbox__input" type="checkbox" aria-checked="false" aria-disabled="false" tabindex="0" role="checkbox" aria-label="Click here to select all products" />
                                <div class="stardust-checkbox__box"></div>
                            </label>
                            <div class="ttctgift">This order contains gift</div>
                        </div>
                        <div class="btnCheckout">
                            <a class="btnPrepareC" href="#"   target="_blank">Proceed to Checkout</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
} 