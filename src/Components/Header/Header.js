import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <div >
      <div class="headerWrapper">
        <div class="headerDetails dpFlex">
          <div class="headerLogo">
            <img class="imgLogo" src='./images/Logo/1.png' alt='logo PAM PAM '></img>
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
                  <a href="#" class="subHeader inlineBlock textWhite sizeText15">
                    <img src='./images/Icon/user.svg' class="cssSvg" alt='icon user'></img>
                    <a href='#' class="textWhite textBold ">Log in </a> | <a href='#' class="textBold  textWhite ">Sign in </a>
                    <ul className="subnav">
                                   <li><a href="/">My Profile</a></li>
                                   <li><a href="/">My Purchase</a></li>
                                   <li><a href="/">Log out</a></li>
                    </ul>

                  </a>
                </li>
              </ul>
            </div>
            <div class="subMenuBot">
              <div class="seachBar">
                <div class="wrap">
                  <div class="search">
                    <input type="text" class="searchTerm" placeholder="What are you looking for?" />
                    <a type="submit" class="searchButton">
                      <img class="cssImgSearch" src='./images/Icon/search.svg'></img>
                    </a>
                  </div>
                </div>
              </div>
              <div class="headerCart">
                  <img src='./images/Icon/shoppingcart.svg' class="cssCart"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
