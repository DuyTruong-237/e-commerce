import React from 'react'
import "./Categories.css"
import { CategoriesData } from '../../data';
import Background from '../BackGroundItems/Background'
import didong from './dientu.jpg'
import CategoriesItem from './CategoriesItem/CategoriesItem'
export default function Categories() {
  return (
    <Background title="DANH MỤC" className="cat-br" >
        
        <div className='cat-content'>
            <div className='cat-items'>
                {
                    CategoriesData.map((item) => {
                        return <CategoriesItem  name={item.name} url={item.url}/>
                    })
                }
                
               
               
                
            </div>
        </div>
    </Background>
  )
}
function BackgroundImageComponent({ imageUrl, children }) {
    const style = {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // Thêm các styles khác mà bạn cần
    };
  
    return <div style={style}>{children}</div>;
  }
