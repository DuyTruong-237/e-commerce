import React from 'react'
import "./Footer.css"
import "../../Assets/font-icons/themify-icons-font/themify-icons/themify-icons.css"


export default function Footer() {
    return (
        <div className='footerWrapper'>
            <div className='footerText'>
                <div className='footerText_title'>
                    <b>ABOUT NU-IN</b>
                    <a className='footerText_content'>
                        About Us
                    </a>
                    <a className='footerText_content'>
                        Gift Card
                    </a>
                    <a className='footerText_content'>
                        Sustainability
                    </a>
                    <a className='footerText_content'>
                        Privacy Policy
                    </a>
                </div>
                <div className='footerText_title'>
                    <b>CUSTOMER CARE</b>
                    <a className='footerText_content'>
                        FAQs
                    </a>
                    <a className='footerText_content'>
                        Shipping & Delivery
                    </a>
                    <a className='footerText_content'>
                        Submit Returns✧Exchanges
                    </a>
                    <a className='footerText_content'>
                        Return Policy
                    </a>
                    <a className='footerText_content'>
                        Terms & Conditions
                    </a>
                    <a className='footerText_content'>
                        Size guide
                    </a>
                </div>
                <div className='footerText_title'>
                    <b>CONTACT</b>
                    <a className='footerText_content'>
                        Contact us
                    </a>
                    <a className='footerText_content'>
                        Wholesale
                    </a>
                </div>
                <div className='footerText_title'>
                    <b>JOIN THE NU-IN COMMUNITY</b>
                    Sign up for exclusive offers, follow us on our sustainability journey and lots of style inspo.
                    <button className='signupBtn'> <b>SIGN UP</b></button>
                </div>
            </div>
            <div className='footerIcon'>
                <span className='ti-facebook'></span>
                <span className='ti-instagram'></span>
                <span className='ti-pinterest'></span>
                <span className='ti-linkedin'></span>    
                <p>@PamPam 2023</p>
            </div>
        </div>
    )
}
