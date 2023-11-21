import React from 'react'
import "./Profile.css"
import Avatar from "../../Assets/Images/avatar.jpeg"
import userAcc from "../../Assets/Images/userProfile.svg"
import userShop from "../../Assets/Images/shop.svg"
import shoppingBag from "../../Assets/Images/shopping-bag.svg"
import voucher from "../../Assets/Images/coupon.svg"
export default function Profile() {
  return (
    <div class="container profileWH">
    <div class="profileNavLeft">
        
        <div class="navLUser">
            <a href="#" class="navLUserA">
                <div class="ppAvatar">
                    <div class="ppAvatarPlaceholder">
                    </div>
                    <img class="ppAvatarImg" src={Avatar} alt="avatar"/>
                </div>
            </a>
            <div class="ppUserWrapper">
                <div class="ppUName">
                    NhuNhy
                </div>
                <div>
                    <a href="#" class="editUser">
                        <svg class="mg_4"width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"
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
                            <img src={userAcc}/>
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
                            <img class="sizeImgIcon" src={shoppingBag}/>
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
                            <img class="sizeImgIcon" src={userShop}/>
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
                            <img class="sizeImgIcon" src={voucher}/>
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
    <div class="profileNavRight">
        <div class="profileDetailWrapper" role="main">
            <div class="dpContent">
                <div class="pDContainer">
                    <div class="titleTextWrap">
                        <h1 class="titleText">My Profile</h1>
                        <div class="subTitle">
                            Manage and protect your account!
                        </div>
                    </div>
                    <div class="InforDetailWrap">
                        <div class="formInfoWrap">
                            <form action="submit">
                                <table class="InfoTab">
                                    <tr>
                                        <td class="espR83">
                                            <label>Username</label>
                                        </td>
                                        <td class="Tmj5Z6">
                                            <div class="_0ZgK9X">
                                                <div class="uxYEXm">nhunhy_khoaluan</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="espR83">
                                            <label>Name</label>
                                        </td>
                                        <td class="Tmj5Z6">
                                            <div>
                                                <div class="W50dp5">
                                                    <input type="text" placeholder="" class="CMyrTJ"
                                                        value="Thanh Nhi"/>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="espR83">
                                            <label>Email</label>
                                        </td>
                                        <td class="Tmj5Z6">
                                            <div class="_0ZgK9X">
                                                <div class="uxYEXm">nh********8@gmail.com</div>
                                                <button class="DJRxAF">change</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="espR83">
                                            <label>Phone</label>
                                        </td>
                                        <td class="Tmj5Z6">
                                            <div class="_0ZgK9X">
                                                <div class="uxYEXm">099288****</div>
                                                <button class="DJRxAF">change</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="espR83">
                                            <label>Gender</label>
                                        </td>
                                        <td class="Tmj5Z6">
                                            <div class="s4eg4A">
                                                <div class="stardust-radio-group" role="radiogroup">
                                                    <div class="stardust-radio" tabindex="0" role="radio"
                                                        aria-checked="false">
                                                        <div class="stardust-radio-button">
                                                            <div class="stardust-radio-button__outer-circle">
                                                                <div class="stardust-radio-button__inner-circle">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="stardust-radio__content">
                                                            <div class="stardust-radio__label">Male</div>
                                                        </div>
                                                    </div>
                                                    <div class="stardust-radio stardust-radio--checked" tabindex="0"
                                                        role="radio" aria-checked="true">
                                                        <div
                                                            class="stardust-radio-button stardust-radio-button--checked">
                                                            <div class="stardust-radio-button__outer-circle">
                                                                <div class="stardust-radio-button__inner-circle">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="stardust-radio__content">
                                                            <div class="stardust-radio__label">Female</div>
                                                        </div>
                                                    </div>
                                                    <div class="stardust-radio" tabindex="0" role="radio"
                                                        aria-checked="false">
                                                        <div class="stardust-radio-button">
                                                            <div class="stardust-radio-button__outer-circle">
                                                                <div class="stardust-radio-button__inner-circle">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="stardust-radio__content">
                                                            <div class="stardust-radio__label">Other</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="espR83">
                                            <label>Date of birth</label>
                                        </td>
                                        <td class="Tmj5Z6">
                                            <div>
                                                <div class="W50dp5">
                                                    <input type="date" placeholder="" class="CMyrTJ" id="birthdaytime" name="birthdaytime"/>
                                                </div>
                                            </div>
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <td class="espR83"><label></label>
                                        </td>
                                        <td class="Tmj5Z6 ">
                                            <div class="BtnA">
                                        <a href="#" onclick="#" class="cssBtn">Save</a>
                                        </div>
                                    </td>
                                </tr>
                                </table>
                            </form>
                        </div>
                        <div class="IQPHvE">
                            <div class="scvgOW">
                                <div class="XWsmVn">
                                    <div class="LoNm4g bgImg">
                                        <img src={Avatar} class="bgImg"></img>
                                    </div>
                                </div>
                                <input class="bMWDYw" type='file' accept=".jpg,.jpeg,.png"/>
                                <button type="button"  class="btn btn-light btn--m btn--inline">Select Image</button>
                                <div class="L4SAGB"><div class="SlaeTm">File size: maximum 1 MB</div>
                                <div class="SlaeTm">File extension: .JPEG, .PNG</div>
                    </div>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
