import "./DailyDiscover.css"
import ProductItem from "../Product/ProductItem"
import React from 'react'
import { ProductData } from "../../data"
export default function DailyDiscover() {
  return (
    <div className="DD-body">
        <div className="dd-title">Daily Discover</div>
        <div className='br-line'></div>
        
        <div className="dd-content">
          {
            ProductData.map((item) => {
              return (
                <div className="dd-item" >
                  <ProductItem name={item.name} currentPrice={item.price} images={item.image}/>
                </div>
              )
            })
          }
          
        
        
        </div>
        <div className="dd-btn"><a href="./discover">SHOW MORE</a></div>
    </div>
  )
}
