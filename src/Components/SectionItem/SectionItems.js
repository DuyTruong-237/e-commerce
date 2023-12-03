import React from "react";
import './SectionItems.css'
import './SectionSeller.css'
import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Son from "../../Assets/Images/Product Images/son1.png"

export default function SectionItems() {
    const location = useLocation();
    const productName = new URLSearchParams(location.search).get('productName');
    const productPrice = new URLSearchParams(location.search).get('productPrice');

    const selectedProduct = {
        name: productName,
        price: productPrice,
        // ... thêm các thông tin sản phẩm khác nếu cần
    };

    console.log(selectedProduct);

    return (
        <section class="stProductCart bdbot" role="list">
            <div class="pdcart" role="listitem">
                <h4 class="sthidden">cart_accessibility_item</h4>
                <div class="inforItemWrap">
                    <div class="cbFirst">
                        <label class="stardust-checkbox">
                            <input class="stardust-checkbox__input" type="checkbox" aria-checked="false" aria-disabled="false" tabindex="0" role="checkbox" aria-label="Click here to select this product" />
                            <div class="stardust-checkbox__box">
                            </div>
                        </label>
                    </div>
                    <div class="productinfo">
                        <div class="pdi1">
                            <a title="M.A.C OFFICIAL " href="#" >
                                <img class="img_pdi" src={Son}></img>
                            </a>
                            <div class="pdi2">
                                <a class="pdi2_1" href="#"></a>
                            </div>
                        </div>
                    </div>
                    <div class="typepd">
                        <div class="typepdfil">
                            <button class="ppbtnwrap" role="button" tabindex="0">
                                <div class="ppvari">Variations:
                                    <div class="ppvariicon"></div>
                                </div>
                                <div class="ppopt">Màu đen 1150</div>
                            </button>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div class="pppricewrap">
                        <div>
                            <span class="ppprice oldprice1">₫100.000</span>
                            <span class="ppprice">₫92.900</span>
                        </div>
                    </div>
                    <div class="abc">
                        <div class="quantitywrap">
                            <div class="quantity-control">
                                <button class="decrease-btn ppbtnquanty btnde">-</button>
                                <input type="text" class="ppbtnquanty quantity-input" role="spinbutton" value="1" readonly />
                                <button class="increase-btn ppbtnquanty">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="totalprice">
                        <span>₫92.900</span>
                        <span class="sthidden" aria-live="polite">Total price: ₫92.900</span>
                    </div>
                    <div class="ppactionwrap ppactionwrap1">
                        <button class="btntitle">Delete</button>
                    </div>


                </div>
            </div>


        </section>
    )
}