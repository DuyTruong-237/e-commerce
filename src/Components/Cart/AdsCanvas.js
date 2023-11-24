import React from "react";
import './AdsCanvas.css'
import ProductAds from '../ItemProducts/ProductAds'
export default function AdsCanvas(){
    return(
        <div class="AdsCanvasWrapper">
            <div class="adsContent">
                <h4 class="ttads">New international customers purchased</h4>
                <div class="ttbodyads">
                    <ProductAds/>
                    <ProductAds/>
                </div>
            </div>
        </div>
    )
}