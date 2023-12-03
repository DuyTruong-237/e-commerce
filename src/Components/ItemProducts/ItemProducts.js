import React from 'react';
import './ItemProducts.css'

export default function ItemProducts(props) {
  
    return (
        <div>
            <h3 className="nameItem" id='nameProduct'>{props.name}</h3>
           
            <div className="productPrice" >
                <div className="pastPrice pastPrice1">
                    <span className="iconPrice"></span>
                    <span className="ppPrice">{props.pastPrice}</span>
                </div>
                <div className="currentPrice currentPrice1">
                    <span className="iconPrice1"></span>
                    <span className="ccPrice">{props.currentPrice}</span>
                </div>
            </div>
            
        </div>
    );
}
