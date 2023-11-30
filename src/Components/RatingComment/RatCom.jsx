import React from 'react'
import starIcon from '../Items/star.png'
import './RatCom.css'

export default function
    () {
    return (
        <div className='ratingCom-Wrapper'>
            <div className='ratingCom-Title'>ĐÁNH GIÁ SẢN PHẨM</div>
            <div className='ratingOverview-Container'>
                <div className='ratingOverview-Wrapper'>
                    <div className='ratingBriefing'>
                        <span>5.0 </span>
                        <span>trên 5</span>
                    </div>
                    <div className='ratingStar-Wrapper'>
                        <img className='ratingStar-Overview' src={starIcon} />
                        <img className='ratingStar-Overview' src={starIcon} />
                        <img className='ratingStar-Overview' src={starIcon} />
                        <img className='ratingStar-Overview' src={starIcon} />
                        <img className='ratingStar-Overview' src={starIcon} />
                    </div>
                </div>
                <div className='ratingFilter-Wrapper'>
                    <div className='ratingFilter'>
                        Tất cả
                    </div>
                    <div className='ratingFilter'>
                        5 Sao
                    </div>
                    <div className='ratingFilter'>
                        4 Sao
                    </div>
                    <div className='ratingFilter'>
                        3 Sao
                    </div>
                    <div className='ratingFilter'>
                        2 Sao
                    </div>
                    <div className='ratingFilter'>
                        1 Sao
                    </div>
                    <div className='ratingFilter'>
                        Có Bình Luận
                    </div>
                    <div className='ratingFilter'>
                        Có Hình Ảnh/ Video
                    </div>
                </div>
            </div>
            

        </div>
    )
}
