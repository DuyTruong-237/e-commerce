import React from "react";
import './ProductAds.css';
import dress1 from '../../Assets/Images/Product Images/set1.jpeg'
export default function ProductAds(){
    return(
        <div class="ProductAdsWrapper">
            <div class="paFixedLeft">
                <div class="imgWrapper mglr">
                <img src={dress1}  class="pdImgAds "></img>
                </div>
            </div>
            <div class="paFixedRight ">
                <a class="namePdAd" href="#"><h3  class="namePdAds">𝗜𝗠 𝗦𝗢 𝗦𝗕𝗛𝗡 | 𝗣𝗘𝗔𝗖𝗘 𝗣𝗟𝗔𝗡𝗘𝗧 𝗖𝗮𝗺𝗽𝗮𝗶𝗴𝗻 </h3></a>
                <p class="typePd1">Dress</p>
                <span class="pricepd">$ <span>30.89</span></span><br/>
                <div class="btn-add1">
                    <a class="btn-add"><p class="cssbtn-add">Add to Cart </p></a>
                    </div>
            </div>
        </div>
    )
}