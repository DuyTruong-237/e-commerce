import React from 'react'
import './CompoProfile.css'
import Avatar from "../../Assets/Images/avatar.jpeg"

export default function NavRightProfile() {
  return (
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
                                                                value="Thanh Nhi" />
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
                                                            <input type="date" placeholder="" class="CMyrTJ" id="birthdaytime" name="birthdaytime" />
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
                                        <input class="bMWDYw" type='file' accept=".jpg,.jpeg,.png" />
                                        <button type="button" class="btn btn-light btn--m btn--inline">Select Image</button>
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
  )
}
