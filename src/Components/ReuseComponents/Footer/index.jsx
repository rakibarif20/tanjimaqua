import React from 'react'
import logo from '../../../images/logo/logo.png'

// social icons 
import { SlSocialFacebook } from "react-icons/sl";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import { PiYoutubeLogoThin } from "react-icons/pi";

// css imprt
import './style.css'
const Index = () => {
  return (
    <div className='footer'>
      <div className='footer__menu'>
          <div className='footer__menu__logoArea'>
            <div className='footer__menu__logoArea__content'>
                <div className='footer__menu__logoArea__content__logo'>
                <img src={logo} alt='logo'/>
                </div>
                <div className='logoArea__logoName'>
                  <label>Tanjim aqua</label>
                </div>
            </div>
            <ul>
              <li><a href='https://www.facebook.com'>Categories</a></li>
              <li><a href='https://www.facebook.com'>Collections</a></li>
            </ul>
          </div>
          <div className=''>

          <ul>
              <li><a href='https://www.facebook.com'>categories</a></li>
              <li><a href='https://www.facebook.com'>collectons</a></li>
              <li><a href='https://www.facebook.com'>the</a></li>
            </ul>
          </div>
          <div className=''>
            <h2>Help</h2>
          <ul>
              <li><a href='https://www.facebook.com'>Privacy Policy</a></li>
              <li><a href='https://www.facebook.com'>Terms and Conditions</a></li>
              <li><a href='https://www.facebook.com'>Cancellation Policy</a></li>
            </ul>
          </div>
          <div className='footer__menu__contact'>
            <h2>contact</h2>
            <ul>
              <li><a href='https://www.facebook.com'>+8801852-333510</a></li>
              <li><a href='https://www.facebook.com'>Rakibarif20@gmail.com</a></li>
              <li><a href='https://www.facebook.com'>Swarupkathi,Nesarabad,Pirojpur,Bangladesh</a></li>
            </ul>
            <div className='social_icons__list'>
                <ul>
                  <li><a href='https://www.facebook.com/'><SlSocialFacebook /></a></li>
                  <li><a href='https://web.whatsapp.com/'><PiWhatsappLogoThin /></a></li>
                  <li><a href='https://mail.google.com/'><GoMail /></a></li>
                  <li><a href='https://www.youtube.com/'><PiYoutubeLogoThin /></a></li>
                </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Index;