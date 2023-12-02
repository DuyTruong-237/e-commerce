import React from 'react'
import "./SearchResult.css"
import Header from '../../Components/Header/Header'
import ProductItem from '../../Components/Product/ProductItem'
import NumberTab from '../../Components/NumberTab/NumberTab'
import Footer from '../../Components/Footer/Footer'
export default function SearchResult() {
  return (
    <div className='SR-body'>
      <Header />
      <div className='SR-container'>
        <div className='SR-title'>Search results for "Lipstick"</div>
        <div className='SR-content'>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        </div>
        <NumberTab/>
      </div>
      <Footer />
    </div>
  )
}
