import React from 'react'
import starIcon from '../Items/star.png'
import ratingStar from '../../Components/Items/star.png'
import userAvatar from '../../Components/RatingComment/user.png'
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
            <div className='Comment-Wrapper'>
                <div className='Customer-Avatar'>
                    <img src={userAvatar} alt="" />
                </div>
                <div className='Comment-Container'>
                    <div className='Customer-Name'>
                        <span>Nhy Thanh</span>
                    </div>
                    <div className='Customer-Rating'>
                        <img className='ratingStar-Cmt' src={ratingStar} alt="" />
                        <img className='ratingStar-Cmt' src={ratingStar} alt="" />
                        <img className='ratingStar-Cmt' src={ratingStar} alt="" />
                        <img className='ratingStar-Cmt' src={ratingStar} alt="" />
                        <img className='ratingStar-Cmt' src={ratingStar} alt="" />
                    </div>
                    <div className='Comment-Content'>
                        <span>Vận chuyển nhanh chóng, rất tốt. Mua ở đây yên tâm hơn mua ở apple flagship store nhiều. Sẽ ủng hộ PamPam Shop.</span>
                    </div>
                    <div className='Comment-Media'>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <div className='Comment-Wrapper'>
                <div className='Customer-Avatar'>
                    <img src={userAvatar} alt="" />
                </div>
                <div className='Comment-Container'>
                    <div className='Customer-Name'>
                        <span>Dương Duy Trường</span>
                    </div>
                    <div className='Customer-Rating'>
                        <img className='ratingStar-Cmt' src={ratingStar} alt="" />
                        <img className='ratingStar-Cmt' src={ratingStar} alt="" />
                        <img className='ratingStar-Cmt' src={ratingStar} alt="" />
                        <img className='ratingStar-Cmt' src={ratingStar} alt="" />
                        <img className='ratingStar-Cmt' src={ratingStar} alt="" />
                    </div>
                    <div className='Comment-Content'>
                        <span>Máy giao nhanh , bọc chống shock rất là okela luônnnn. Seal đầy đủ. Mua nhiều lần ở shop rồi thấy hỗ trợ nhiệt tình phết.</span>
                    </div>
                    <div className='Comment-Media'>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <div className='Comment-Wrapper'>
                <div className='Customer-Avatar'>
                    <img src={userAvatar} alt="" />
                </div>
                <div className='Comment-Container'>
                    <div className='Customer-Name'>
                        <span>Phạm Tuấn</span>
                    </div>
                    <div className='Customer-Rating'>
                        <img className='ratingStar-Cmt' src={ratingStar} alt="" />
                        <img className='ratingStar-Cmt' src={ratingStar} alt="" />
                        <img className='ratingStar-Cmt' src={ratingStar} alt="" />
                        <img className='ratingStar-Cmt' src={ratingStar} alt="" />
                        <img className='ratingStar-Cmt' src={ratingStar} alt="" />
                    </div>
                    <div className='Comment-Content'>
                        <span>Hàng nhận đẹp đúng như mô tả, đóng gói cẩn thận. Giao hàng nhanh.</span>
                    </div>
                    <div className='Comment-Media'>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
}
