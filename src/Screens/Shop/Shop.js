import "./Shop.css"
import React from 'react'
import Header from "../../Components/Header/Header"
import ShopCart from "../../Components/ShopComponents/ShopCart"
import ProductItem from "../../Components/Product/ProductItem"
import NumberTab from "../../Components/NumberTab/NumberTab"
export default function Shop() {
  return (
    <div>
      <Header/>
      <div className="Shop-container">
    
        <ShopCart/>
        <div className="Shop-products">
          <div className="Shop-pr-title">products</div>
          <div className="Shop-PRContent">
            <div className="Shop-PRContent-item"><ProductItem/></div>
            <div className="Shop-PRContent-item"><ProductItem/></div>

            <div className="Shop-PRContent-item"><ProductItem/></div>

            <div className="Shop-PRContent-item"><ProductItem/></div>
            <div className="Shop-PRContent-item"><ProductItem/></div>
            <div className="Shop-PRContent-item"><ProductItem/></div>
            <div className="Shop-PRContent-item"><ProductItem/></div>
            <div className="Shop-PRContent-item"><ProductItem/></div>
            <div className="Shop-PRContent-item"><ProductItem/></div>
            <div className="Shop-PRContent-item"><ProductItem/></div>
            <div className="Shop-PRContent-item"><ProductItem/></div>
            <div className="Shop-PRContent-item"><ProductItem/></div>
            <div className="Shop-PRContent-item"><ProductItem/></div>
            <div className="Shop-PRContent-item"><ProductItem/></div>
            <div className="Shop-PRContent-item"><ProductItem/></div>

            <div className="Shop-PRContent-item"><ProductItem/></div>

            <div className="Shop-PRContent-item"><ProductItem/></div>

            <div className="Shop-PRContent-item"><ProductItem/></div>


          </div>
          <NumberTab/>
        </div>

      </div>
    </div>
  )
}
