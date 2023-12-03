import React, { useState, useMemo } from "react";
import MiniCart from "../MiniCart/MiniCart";
import "./Header.css"
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const username= localStorage.getItem('username');
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleBackHomePage = () => {
    navigate('/');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const memoizedMiniCart = useMemo(() => <div className="header-MiniCart"><MiniCart /></div>, []);
  return (
    <div >
      <div class="headerWrapper" >
        <div class="headerDetails dpFlex">
          <div class="headerLogo">
            <img class="imgLogo" src='./images/Logo/1.png' alt='logo PAM PAM ' onClick={handleBackHomePage}></img>
          </div>
          <div class="headerMenu">
            <div class="subMenuTop">
              <ul class="navMenutop">
                <li >
                  <a href="#" class="subHeader inlineBlock textWhite sizeText15">
                    <img src='./images/Icon/notification.svg' class="cssSvg" alt='icon notification'></img>
                    Notifications
                  </a>
                </li>
                <li >
                  <a href="#" class="subHeader inlineBlock textWhite sizeText15">
                    <img src='./images/Icon/earthglobe.svg' class="cssSvg" alt='icon notification'></img>
                    Language
                    <ul className="subnav">
                                   <li><a href="/">English</a></li>
                                   <li><a href="/">Vietnamese</a></li>
                    </ul>
                  </a>
                </li>
                <li >
                  <a href="#" class="subHeader inlineBlock textWhite sizeText15">
                    <img src='./images/Icon/question.svg' class="cssSvg" alt='icon notification'></img>
                    Helps
                  </a>
                </li>
                <li >
                  <a href="#" class="btn-login subHeader inlineBlock textWhite sizeText15">
                    <img src='./images/Icon/user.svg' class="cssSvg" alt='icon user'></img>
                    {username?<><a href='/login' class="textWhite textBold ">{username} </a> <ul className="subnav">
                                   <li><a href="/profile">My Profile</a></li>
                                   <li><a href="/order">My Purchase</a></li>
                                   <li><a href="/">Log out</a></li>
                    </ul></>  :<><a href='/login' class="textWhite textBold btn-login ">Log in </a> | <a href='#' class="textBold  textWhite ">Sign up </a></>}
                   

                  </a>
                </li>
              </ul>
            </div>
            <div class="subMenuBot">
              <div class="seachBar">
                <div class="wrap">
                  <div class="search">
                    <input type="text" class="searchTerm" placeholder="What are you looking for?" />
                    <a type="submit"
                    href='./SearchResult' class="searchButton">
                      <img class="cssImgSearch" src='./images/Icon/search.svg'></img>
                    </a>
                  </div>
                </div>
              </div>
              <div
        className="headerCart"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href="./cart">
          <img src='./images/Icon/shoppingcart.svg' className="cssCart" alt="Cart" />
        </a>
      </div>

     {/* Hiển thị MiniCart khi hover */}
          {isHovered && memoizedMiniCart}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
