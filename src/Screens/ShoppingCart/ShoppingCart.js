import React from 'react'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ActiveCart from '../../Components/Cart/ActiveCart';
export default function ShoppingCart() {
  return (
    <div>
      <Header/>
      <ActiveCart/>
      <Footer/>
    </div>
  )
}
