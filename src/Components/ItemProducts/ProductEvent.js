import "./ProductEvent.css"
import newimg from "./inew.gif"
import React from 'react'

export default function ProductEvent(props) {
  return (
    <div className="PE-container">
      <img className="PE-img" src={props.pimg||"https://png.pngtree.com/png-clipart/20210502/original/pngtree-maintenance-emulsion-packaging-cosmetic-bottle-png-image_6267161.png"}/>
      <img className="PE-logo" src={props.logo||"https://cdn.doctorlacir.com/wp-content/uploads/2022/03/drlacir.png"}/>
      <div className="PE-sale">{props.sale||"-30%"} <img className="PE-newicon" src={newimg}/></div>
      <div className="shopnow">SHOP NOW</div>
    </div>
  )
}
