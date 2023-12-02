import React from "react";
import './MiniCart.css';
import product1 from '../../Assets/Images/Product Images/set1.jpeg'
import product2 from '../../Assets/Images/Product Images/set2.jpeg'

export default function MiniCart(){
    return(
        <div class="minicartWrapper">
            <h2 class="miniTitle">Recently Added Products</h2>
            <div class="miniwrap">
                <a href ="./cart" class="linkproduct">
                    <img class="imgMinicart" src={product1}></img>
                    <p> Dress Pink Fly Dress</p>
                    <p class="priceMini"> $20</p>

                </a>
            </div>
            <div class="miniwrap">
                <a href ="./cart" class="linkproduct">
                    <img class="imgMinicart" src={product1}/>
                    <p> Dress Pink Fly Dress</p>
                    <p class="priceMini"> $20</p>

                </a>
            </div>
            <div class="miniwrap">
                <a href ="./cart" class="linkproduct">
                    <img class="imgMinicart" src={product2}/>
                    <p> Dress Pink Fly Dress</p>
                    <p class="priceMini"> $20</p>

                </a>
            </div>
            <div class="totalmini">
                <h3 class="titletotal"> Total :  </h3>
                <p class="priceMini"> $60</p>
            </div>
            <div className="hover-content">
        {/* Nội dung hiển thị khi hover */}
      
      </div>
                
        </div>
        
    )
}