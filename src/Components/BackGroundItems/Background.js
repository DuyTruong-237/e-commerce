import React from 'react'
import "./Background.css"
export default function Background(props) {
  return (
    <div className='br-body'>
        <div className='br-name-tab'>{props.title}</div>
        <div className='br-line'></div>
        <div className='br-chil'>{props.children}</div>
    </div>
  )
}
