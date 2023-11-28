import React from 'react'
import "./CompoProfile.css"
import Avatar from "../../Assets/Images/avatar.jpeg"
import userAcc from "../../Assets/Images/userProfile.svg"
import userShop from "../../Assets/Images/shop.svg"
import shoppingBag from "../../Assets/Images/shopping-bag.svg"
import voucher from "../../Assets/Images/coupon.svg"
export default function Profile() {
    return (
        <div class="profileNavLeft">
                <div class="navLUser">
                    <a href="#" class="navLUserA">
                        <div class="ppAvatar">
                            <div class="ppAvatarPlaceholder">
                            </div>
                            <img class="ppAvatarImg" src={Avatar} alt="avatar" />
                        </div>
                    </a>
                    <div class="ppUserWrapper">
                        <div class="ppUName">
                            NhuNhy
                        </div>
                        <div>
                            <a href="#" class="editUser">
                                <svg class="mg_4" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
                                        fill="#9B9B9B" fill-rule="evenodd"></path>
                                </svg>Edit Profile</a>
                        </div>
                    </div>
                </div>

                <div class="categLeftWrapper">
                    <div class="stardust-dropdown stardust-dropdown--open">
                        <div class="stardust-dropdown__item-header">
                            <a class="+1U02e" href="#">
                                <div class="bfikuD">
                                    <img src={userAcc} />
                                </div>
                                <div class="DlL0zX">
                                    <span class="adF7Xs">My Account</span>
                                </div>
                            </a>
                        </div>
                        <div class="stardust-dropdown__item-body stardust-dropdown__item-body--open iii" >
                            <div class="Yu7gVR">
                                <a class="FEE-3D tH0d6d" href="#">
                                    <span class="qyt-aY">Profile</span>
                                </a>
                                <a class="FEE-3D" href="#">
                                    <span class="qyt-aY">Banks &amp; Cards</span>
                                </a>
                                <a class="FEE-3D" href="#">
                                    <span class="qyt-aY">Addresses</span></a>
                                <a class="FEE-3D" href="#">
                                    <span class="qyt-aY">Change Password</span>
                                </a>
                                <a class="FEE-3D" href="#">
                                    <span class="qyt-aY">Notification Settings</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="stardust-dropdown">
                        <div class="stardust-dropdown__item-header">
                            <a class="+1U02e" href="#">
                                <div class="bfikuD">
                                    <img class="sizeImgIcon" src={shoppingBag} />
                                </div>
                                <div class="DlL0zX">
                                    <span class="adF7Xs">My Purchase</span>
                                </div>
                            </a>
                        </div>
                        <div class="stardust-dropdown__item-body l000" >
                            <div class="Yu7gVR">

                            </div>
                        </div>
                    </div>
                    <div class="stardust-dropdown">
                        <div class="stardust-dropdown__item-header">
                            <a class="+1U02e" href="#">
                                <div class="bfikuD">
                                    <img class="sizeImgIcon" src={userShop} />
                                </div>
                                <div class="DlL0zX">
                                    <span class="adF7Xs">My Shop</span>
                                </div>
                            </a>
                        </div>
                        <div class="stardust-dropdown__item-body l000" >
                            <div class="Yu7gVR">

                            </div>
                        </div>
                    </div>
                    <div class="stardust-dropdown">
                        <div class="stardust-dropdown__item-header">
                            <a class="+1U02e" href="#">
                                <div class="bfikuD">
                                    <img class="sizeImgIcon" src={voucher} />
                                </div>
                                <div class="DlL0zX">
                                    <span class="adF7Xs">My Vouchers</span>
                                </div>
                            </a>
                        </div>
                        <div class="stardust-dropdown__item-body l000" >
                            <div class="Yu7gVR">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
