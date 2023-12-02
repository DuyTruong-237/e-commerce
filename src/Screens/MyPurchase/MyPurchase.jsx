import React from 'react'
import './MyPurchase.css'
import Header from "../../Components/Header/Header"
import NavLeftProfile from '../../Components/Profile/NavLeftProfile';
import NavRightProfile from '../../Components/ListItem-Cart/ListItem';
import Footer from "../../Components/Footer/Footer"
export default function MyPurchase() {
  return (
    <div>
      <Header />
      <div className='bodyProfile'>
        <NavLeftProfile />
        <NavRightProfile />
      </div>
      <Footer />
    </div>
  )
}
