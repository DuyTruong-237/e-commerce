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
              
          </div>
          <div class="subMenuBot">
            <div class="seachBar">
              <div class="input-group border-input">
                <div class="form-outline">
                  <input type="search" id="form1" class="form-control css-form "  placeholder='Search'/>
                </div>
                <a type="button" class="css-button-a" href='#'>
                  <img class="searchIcon" src='./images/Icon/search.svg'></img>
                </a>
              </div>
            </div>
            <div class="headerCart">

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
