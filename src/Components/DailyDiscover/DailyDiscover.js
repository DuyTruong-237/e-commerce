import "./DailyDiscover.css";
import ProductItem from "../Product/ProductItem";
import { ProductData } from "../../data"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DailyDiscover() {
  const navigate = useNavigate(); 
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    console.log(selectedProduct);
    //navigate('/inforproduct', { state: { selectedProduct } });
  };

  return (
    <div className="DD-body">
      <div className="dd-title">Daily Discover</div>
      <div className='br-line'></div>
        
      <div className="dd-content">
        {ProductData.map((item, index) => (
          <div className="dd-item" key={index} onClick={() => handleProductClick(item)}>
            <ProductItem name={item.name} currentPrice={item.price} images={item.image} />
          </div>
        ))}
      </div>

      <div className="dd-btn"><a href="./discover">SHOW MORE</a></div>
    </div>
  );
}
