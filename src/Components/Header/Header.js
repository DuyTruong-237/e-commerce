import React from 'react'
import "./Header.css"
export default function Header() {
  return (
    <div >
      <div class="headerWrapper">
        <div class="headerLogo">
          <img class="imgLogo" src='./images/Logo/1.png' alt='logo PAM PAM '></img>
        </div>
        <div class="headerMenu">
          <div class="subMenuTop">
              <ul class="navMenutop">
                <li >
                  <a href="#" class="subHeader inlineBlock textWhite sizeText15">
                  <img src='./images/Icon/notification.svg' class="cssSvg" alt='icon notification'></img>
                  Thông Báo
                  </a>
                </li>
                <li >
                  <a href="#" class="subHeader inlineBlock textWhite sizeText15">
                  <img src='./images/Icon/earthglobe.svg' class="cssSvg" alt='icon notification'></img>
                  Ngôn Ngữ
                  </a>
                </li>
                <li >
                  <a href="#" class="subHeader inlineBlock textWhite sizeText15">
                  <img src='./images/Icon/question.svg' class="cssSvg" alt='icon notification'></img>
                  Góp Ý/ Thắc Mắc 
                  </a>
                </li>
              </ul>
          </div>
          <div class="subMenuBot">
            <div class="seachBar">
              
            </div>
            <div class="headerCart">

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
