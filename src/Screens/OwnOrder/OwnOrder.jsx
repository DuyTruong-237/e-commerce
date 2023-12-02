import React from 'react'
import Header from "../../Components/Header/Header"
import NavLeftProfile from '../../Components/Profile/NavLeftProfile';
import ListItem from '../../Components/ListItem-Cart/ListItem';
import Footer from "../../Components/Footer/Footer"
export default function OwnOrder() {
  return (
    <div>
      <Header />
      <div className='bodyProfile'>
        <NavLeftProfile />
        <ListItem />
      </div>
      <Footer />
    </div>
  )
}
