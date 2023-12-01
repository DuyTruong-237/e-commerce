import React from 'react'
import "./DailyDiscover.css"
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
            <div className='sdd-content-items'><ProductItem/></div>
            <div className='sdd-content-items'><ProductItem/></div>
            <div className='sdd-content-items'><ProductItem/></div>
            <div className='sdd-content-items'><ProductItem/></div>
            <div className='sdd-content-items'><ProductItem/></div>
            <div className='sdd-content-items'><ProductItem/></div>
            <div className='sdd-content-items'><ProductItem/></div>
            <div className='sdd-content-items'><ProductItem/></div>
            <div className='sdd-content-items'><ProductItem/></div>
            <div className='sdd-content-items'><ProductItem/></div>
            <div className='sdd-content-items'><ProductItem/></div>
            <div className='sdd-content-items'><ProductItem/></div>
            <div className='sdd-content-items'><ProductItem/></div>
            <div className='sdd-content-items'><ProductItem/></div>
            <div className='sdd-content-items'><ProductItem/></div>
            <div className='sdd-content-items'><ProductItem/></div>
            <div className='sdd-content-items'><ProductItem/></div>
            <div className='sdd-content-items'><ProductItem/></div>
            

          </div>
          <NumberTab/>


        </div>
        <Footer/>
      
    </div>
  )
}
