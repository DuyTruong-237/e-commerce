import  "./CategoriesItem.css";
import React from 'react'

export default function CategoriesItem(props) {
    const divStyle = {
        backgroundImage: `url("${props.url}")`,
       
      };
  return (
    <div style={divStyle} className='cat-item'>
        <div className='overlay'>
            <div className='cat-name'>{props.name || "Áo Khoác"}</div>
        </div>
    </div>
  )
}
