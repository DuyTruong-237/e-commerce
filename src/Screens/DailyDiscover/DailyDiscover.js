import React from 'react'
import "./DailyDiscover.css"
import ProductItem from "../../Components/Product/ProductItem"
import Header from "../../Components/Header/Header"
import NumberTab from '../../NumberTab/NumberTab'
import Footer from "../../Components/Footer/Footer"

export default function DailyDiscover() {
  return (
    <div className='sc-dd-body'>
        <Header/>
        <div className='sdd-cotainer'>
          <div className='sdd-title'>
            <div className='sdd-line'></div>
            <div className='sdd-title-name'>
              Daily Discover
            </div>
            <div>

            </div>

          </div>
          <div className='sdd-content'>
            <div><ProductItem/></div>
            <div><ProductItem/></div>

            <div><ProductItem/></div>

            <div><ProductItem/></div>

            <div><ProductItem/></div>

            <div><ProductItem/></div>

            <div><ProductItem/></div>

            <div><ProductItem/></div>
            <div><ProductItem/></div>

            <div><ProductItem/></div>

            <div><ProductItem/></div>
            <div><ProductItem/></div>
            <div><ProductItem/></div>

            <div><ProductItem/></div>

            <div><ProductItem/></div>

            <div><ProductItem/></div>

            <div><ProductItem/></div>

            <div><ProductItem/></div>

            <div><ProductItem/></div>

            <div><ProductItem/></div>

            <div><ProductItem/></div>

            <div><ProductItem/></div>
            <div><ProductItem/></div>
            <div><ProductItem/></div>



          </div>
          <NumberTab/>


        </div>
        <Footer/>
      
    </div>
  )
}
