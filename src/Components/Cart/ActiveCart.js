import React from 'react';
import './ActiveCart.css'
import SectionSeller from '../SectionItem/SectionSeller';
import CartCheckout from '../Cart/CartCheckout'
export default function ActiveCart() {
    return (
        <div class="ppActiveCart" id='ppActiveCartId' >
            <div class="AC-Content mglr">
                <div class="AC-Header">
                    <h1 class="AC-Text">Shopping Cart </h1>
                </div>
                <div class="AC-Body">
                    
                    <form id="form_CheckProduct" method='post' action="#">
                    <div class="Productwrapper">
                        <div class="pctleft">
                    <div class="cproduct">
                        <div class="cproduct1">
                            <label class="stardust-checkbox">
                                <input class="stardust-checkbox__input" type="checkbox" aria-checked="false" aria-disabled="false" tabindex="0" role="checkbox" aria-label="Click here to select all products"/>
                                    <div class="stardust-checkbox__box">
                                    </div>
                                    </label>
                                    </div>
                                    <div class="clproduct">Product</div>
                                    <div class="clprice">Unit Price</div>
                                    <div class="clquanti">Quantity</div>
                                    <div class="cltotal">Total Price</div>
                                    <div class="claction">Actions</div>
                        </div>
                        
                            <SectionSeller/>
                            </div>  
                            <div class="pctright">
                            <CartCheckout/>
                            </div>
                            </div>
                    </form>
                </div>

            </div>
        </div>
    )
}