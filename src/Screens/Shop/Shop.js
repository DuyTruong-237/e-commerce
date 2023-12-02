import "./Shop.css"
import React, { useState } from 'react'
import Header from "../../Components/Header/Header"
import ShopCart from "../../Components/ShopComponents/ShopCart"
import ProductItem from "../../Components/Product/ProductItem"
import NumberTab from "../../Components/NumberTab/NumberTab"
import AddProduct from "../../Components/AddNewProduct/AddNewProduct"
export default function Shop() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      {showForm ?  <div  className="shop-addpr"><div onClick={toggleForm} className="add-close"> X</div><AddProduct /></div>:""}

      <Header/>
      
      <div className="addproduct"  onClick={toggleForm}>+</div>
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
