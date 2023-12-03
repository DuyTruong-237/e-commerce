import React from 'react'
import { useState, useEffect } from 'react';
import starIcon from '../Items/star.png'
import ratingStar from '../../Components/Items/star.png'
import userAvatar from '../../Components/RatingComment/user.png'
import { CommentData } from "../../data"
import './RatCom.css'

export default function
    () {
    const [comments, setComments] = useState(CommentData);
    const [filteredComments, setFilteredComments] = useState(CommentData);

    const renderRatingStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<img key={i} className='ratingStar-Cmt' src={ratingStar} alt='' />);
        }
        return stars;
    };

    const handleFilter5star = () => {
        const filteredComments = comments.filter(cmt => cmt.rate === '5');
        setFilteredComments(filteredComments);
    };

    const handleFilter4star = () => {
        const filteredComments = comments.filter(cmt => cmt.rate === '4');
        setFilteredComments(filteredComments);
    };

    useEffect(() => {
        setFilteredComments(comments);
        console.log(comments)
      }, [comments]);
    
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
                    <div className='ratingFilter' onClick={handleFilter5star}>
                        5 Sao
                    </div>
                    <div className='ratingFilter' onClick={handleFilter4star}>
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
            {filteredComments.map((cmt) => (
                <div className='Comment-Wrapper'>
                    <div className='Customer-Avatar'>
                        <img src={userAvatar} alt="" />
                    </div>
                    <div className='Comment-Container'>
                        <div className='Customer-Name'>
                            <span>{cmt.name}</span>
                        </div>
                        <div className='Customer-Rating'>
                            {renderRatingStars(cmt.rate)}
                        </div>
                        <div className='Comment-Content'>
                            <span>{cmt.comment}</span>
                        </div>
                        <div className='Comment-Media'>
                            <img src="" alt="" />
                        </div>
                    </div>

                </div>
            ))}

        </div>
    )
}
