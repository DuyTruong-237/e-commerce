import React from 'react'
import './InfoProduct.css'
import Header from"../../Components/Header/Header"
import Item from '../../Components/Items/Item'
import ItemDes from '../../Components/Item-Description/ItemDes'
import BriefShop from "../../Components/BriefShop/BriefShop"
import RatCom from '../../Components/RatingComment/RatCom'
import ShopVoucher from '../../Components/ShopVoucher/ShopVoucher'
import Footer from "../../Components/Footer/Footer"
export default function InfoProduct() {
  return (
    <div>
        <Header/>
        <Item/>
        <BriefShop/>
        <div className='infoProduct-Body'>
          <ItemDes/>
          <ShopVoucher/>
        </div>
        <RatCom/>
        <Footer/>  
    </div>
  )
}
