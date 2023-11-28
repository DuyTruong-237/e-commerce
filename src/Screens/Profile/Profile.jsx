import React from 'react'
import './Profile.css'
import Header from "../../Components/Header/Header"
import NavLeftProfile from '../../Components/Profile/NavLeftProfile';
import NavRightProfile from '../../Components/Profile/NavRightProfile';
import Footer from "../../Components/Footer/Footer"
export default function Profile() {
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
