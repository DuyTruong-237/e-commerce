import React, { useState } from 'react';
import './ItemDes.css';
import rightBtn from '../Item-Description/right.png';
import editBtn from '../Item-Description/edit-button.png';
import { Link, useNavigate } from 'react-router-dom';

export default function ItemDes() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [textContent, setTextContent] = useState();

  const handleNavigateToHome = (e) => {
    e.preventDefault();
    navigate('/Home');
  };

  const handleEditButtonClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveButtonClick = () => {
    setIsEditing(false);
  };

  const handleTextareaChange = (e) => {
    setTextContent(e.target.value);
  };

  return (
    <div className='itemDescription-Wrapper'>
      <div className='itemDes-Title'>
        <span>Product Description</span>
      </div>
      <div className='itemDes-Detail'>
        <div className='itemCategory'>
          <div className='itemCategory-Title'>
            <span>Category</span>
            <a href="#" onClick={handleNavigateToHome}>
              PamPam
            </a>
            <img src={rightBtn} alt="" />
            <a href="#">
              Phones
            </a>
            <img src={rightBtn} alt="" />
            <a href="#">
              Apple
            </a>
          </div>
          <div className='itemCategory-Title'>
            <span>Brand</span>
            <a href="#">
              Apple
            </a>
          </div>
          <div className='itemCategory-Title'>
            <span>Warehouse</span>
            <span>450</span>
          </div>
        </div>
      </div>
      <div className='itemDes-Content'>
        {isEditing ? (
          <div className='itemDes-ContentScript'>
            <textarea value={textContent} onChange={handleTextareaChange} />
            <button className='saveItemDesContent-Btn' onClick={handleSaveButtonClick}>Save</button>
          </div>
        ) : (
          <pre>{textContent || 'Enter your description here'}</pre>
        )}
        <button className='editItemDesContent-Btn' onClick={handleEditButtonClick}>
          <img src={editBtn} alt="Edit" />
        </button>
      </div>
    </div>
  );
}
