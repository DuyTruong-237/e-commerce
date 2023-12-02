import React from 'react'
import "./SearchResult.css"
import Header from '../../Components/Header/Header'
import ProductItem from '../../Components/Product/ProductItem'
import NumberTab from '../../Components/NumberTab/NumberTab'
import Footer from '../../Components/Footer/Footer'
import Filter from "./filter"

import { ProductData } from "../../data"
export default function SearchResult() {
  return (
    <div className='SR-body'>
      <Header />
      <div className='SR-container'>
        <div className='SR-title'>Search results for "Lipstick"</div>
        <Filter/>
        <div className='SR-content'>
        {ProductData.map((item) => (
          <div className="dd-item"  >
            <ProductItem pitem={item} name={item.name} currentPrice={item.price} images={item.image} />
          </div>
        ))}
        
        </div>
        <NumberTab/>
      </div>
      <Footer />
    </div>
  )
}
