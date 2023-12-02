import React from 'react'
import "./Categories.css"
import Background from '../BackGroundItems/Background'
import didong from './dientu.jpg'
export default function Categories() {
  return (
    <Background title="Categories" className="cat-br" >
        
        <div className='cat-content'>
            <div className='cat-items'>
                <div className='cat-item'>
                    <div className='overlay'>
                        <div className='cat-name'>Áo Khoác</div>
                    </div>
                </div>
                <div className='cat-item' >
                    <div className='overlay'>
                        <div className='cat-name'>Áo Khoác</div>
                    </div>
                </div>
                <div className='cat-item'>
                    <div className='overlay'>
                        <div className='cat-name'>Áo Khoác</div>
                    </div>
                </div>
                <div className='cat-item'>
                    <div className='overlay'>
                        <div className='cat-name'>Áo Khoác</div>
                    </div>
                </div>
                <div className='cat-item'>
                    <div className='overlay'>
                        <div className='cat-name'>Áo Khoác</div>
                    </div>
                </div>
                <div className='cat-item'>
                    <div className='overlay'>
                        <div className='cat-name'>Áo Khoác</div>
                    </div>
                </div>
                <div className='cat-item'>
                    <div className='overlay'>
                        <div className='cat-name'>Áo Khoác</div>
                    </div>
                </div>
                <div className='cat-item'>
                    <div className='overlay'>
                        <div className='cat-name'>Áo Khoác</div>
                    </div>
                </div>
                <div className='cat-item'>
                    <div className='overlay'>
                        <div className='cat-name'>Áo Khoác</div>
                    </div>
                </div>
                
                <div className='cat-item'>
                    <div className='overlay'>
                        <div className='cat-name'>Áo Khoác</div>
                    </div>
                </div>
                <div className='cat-item'>
                    <div className='overlay'>
                        <div className='cat-name'>Áo Khoác</div>
                    </div>
                </div>
                <div className='cat-item'>
                    <div className='overlay'>
                        <div className='cat-name'>Áo Khoác</div>
                    </div>
                </div>
                <div className='cat-item'>
                    <div className='overlay'>
                        <div className='cat-name'>Áo Khoác</div>
                    </div>
                </div>
                <div className='cat-item'>
                    <div className='overlay'>
                        <div className='cat-name'>Áo Khoác</div>
                    </div>
                </div>
                <div className='cat-item'>
                    <div className='overlay'>
                        <div className='cat-name'>Áo Khoác</div>
                    </div>
                </div>
                <div className='cat-item'>
                    <div className='overlay'>
                        <div className='cat-name'>Áo Khoác</div>
                    </div>
                </div>
                <div className='cat-item'>
                    <div className='overlay'>
                        <div className='cat-name'>Áo Khoác</div>
                    </div>
                </div>
                <div className='cat-item'>
                    <div className='overlay'>
                        <div className='cat-name'>Áo Khoác</div>
                    </div>
                </div>
                
               
               
                
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
