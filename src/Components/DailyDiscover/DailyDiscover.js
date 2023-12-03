import "./DailyDiscover.css";
import ProductItem from "../Product/ProductItem";
import { ProductData } from "../../data"
import React, { useState } from 'react';

export default function DailyDiscover() {
  
  

  return (
    <div className="DD-body">
      <div className="dd-title">Daily Discover</div>
      <div className='br-line'></div>
        
      <div className="dd-content">
        {ProductData.map((item) => (
          <div className="dd-item"  >
            <ProductItem pitem={item} name={item.name} currentPrice={item.price} images={item.image} />
          </div>
        ))}
      </div>

      <div className="dd-btn"><a className="showmore" href="./discover">SHOW MORE</a></div>
    </div>
  );
}
