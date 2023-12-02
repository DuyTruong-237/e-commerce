import React from 'react'
import "./DailyDiscover.css"
import { ProductData } from '../../data'
import ProductItem from "../../Components/Product/ProductItem"
import Header from "../../Components/Header/Header"
import NumberTab from '../../Components/NumberTab/NumberTab'
import Footer from "../../Components/Footer/Footer"

export default function DailyDiscover() {
  return (
    <div className='sc-dd-body'>
        <Header/>
        <div className='sdd-container'>
          <div className='sdd-title'>
            <div className='sdd-line'></div>
            <div className='sdd-title-name'>
              Daily Discover
            </div>
            <div>

            </div>

          </div>
          <div className='sdd-content'>
          {
            ProductData.map((item) => {
              return (
                <div className="sdd-content-items" >
                  <ProductItem name={item.name} currentPrice={item.price} images={item.image}/>
                </div>
              )
            })
          }
            
          </div>
          <NumberTab/>


        </div>
        <Footer/>
      
    </div>
  )
}
