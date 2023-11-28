import "./DailyDiscover.css"
import ProductItem from "../Product/ProductItem"
import React from 'react'

export default function DailyDiscover() {
  return (
    <div className="DD-body">
        <div className="dd-title">Daily Discover</div>
        <div className='br-line'></div>
        
        <div className="dd-content">
          <div className="dd-item"><ProductItem /></div>
          <div className="dd-item"><ProductItem /></div>
          <div className="dd-item"><ProductItem /></div>
          <div className="dd-item"><ProductItem /></div>
          <div className="dd-item"><ProductItem /></div>
          <div className="dd-item"><ProductItem /></div>
          <div className="dd-item"><ProductItem /></div>
          <div className="dd-item"><ProductItem /></div>
          <div className="dd-item"><ProductItem /></div>
          <div className="dd-item"><ProductItem /></div>
          <div className="dd-item"><ProductItem /></div>
          <div className="dd-item"><ProductItem /></div>
          <div className="dd-item"><ProductItem /></div>
          
        
        
        </div>
    </div>
  )
}
