import React from 'react'
import Header from"../../Components/Header/Header"
import Slider from '../../Components/Slider/Slider'
import Categories from "../../Components/Categories/Categories"
import Footer from "../../Components/Footer/Footer"
export default function Home() {
  return (
    <div>
        <Header/>
        <Slider/>
        <Categories/>
        <Footer/>
        
    </div>
  )
}
