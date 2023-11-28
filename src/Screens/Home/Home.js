import React from 'react'
import Header from"../../Components/Header/Header"
import Slider from '../../Components/Slider/Slider'
import Categories from "../../Components/Categories/Categories"
import Footer from "../../Components/Footer/Footer"
import DailyDiscover from '../../Components/DailyDiscover/DailyDiscover'
import HomeEvent from '../../Components/HomeEvent/HomeEvent'
export default function Home() {
  return (
    <div>
        <Header/>
        <Slider/>
        <Categories/>
        <HomeEvent/>
        <DailyDiscover/>
        <Footer/>
        
    </div>
  )
}
