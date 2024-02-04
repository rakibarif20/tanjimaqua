import React from 'react'
import logo from '../../../images/logo/logo.png'
// social icons 
import youtubeIcon from '../../../images/social-icons/youTube.svg'
import facebookIcon from '../../../images/social-icons/fb.svg'
import whatsappIcon from '../../../images/social-icons/whatsapp.svg'
import mailIcon from '../../../images/social-icons/email.svg'

// css imprt
import './style.scss'
const Index = () => {
  return (
    <div className='footer'>
      <div className='footer__menu'>
          <div className='footer__menu__logoArea'>
            <div className='footer__menu__logoArea__content'>
                <div className='footer__menu__logoArea__content__logo'>
                  <img src={logo} alt='logo'/>
                </div>
                <div className='footer__menu__logoArea__content__logoName'>
                  <label>Tanjim aqua</label>
                </div>
            </div>
            <ul>
              <li><a href='https://www.facebook.com'>Categories</a></li>
              <li><a href='https://www.facebook.com'>Collections</a></li>
            </ul>
          </div>
          <div className='footer__menu__content'>
            <h2>Help</h2>
            <ul>
              <li><a href='https://www.facebook.com'>Privacy Policy</a></li>
              <li><a href='https://www.facebook.com'>Terms and Conditions</a></li>
              <li><a href='https://www.facebook.com'>Return and Refund Policy</a></li>
              <li><a href='https://www.facebook.com'>Cancellation Policy</a></li>
            </ul>
          </div>
          <div className='footer__menu__content'>
            <h2>Help</h2>
          <ul>
              <li><a href='https://www.facebook.com'>Privacy Policy</a></li>
              <li><a href='https://www.facebook.com'>Terms and Conditions</a></li>
              <li><a href='https://www.facebook.com'>Return and Refund Policy</a></li>
              <li><a href='https://www.facebook.com'>Cancellation Policy</a></li>
            </ul>
          </div>
          <div className='footer__menu__content'>
            <h2>contact</h2>
            <ul>
              <li><a href='https://www.facebook.com'>+8801709-7976619</a></li>
              <li><a href='https://www.facebook.com'>Rakibarif20@gmail.com</a></li>
              <li><a href='https://www.facebook.com'>Swarupkathi,Nesarabad,Pirojpur,Bangladesh</a></li>
            </ul>
            <div className='social_icons__list'>
                <ul>
                  <li><a href='https://www.facebook.com/'>
                    <img src={facebookIcon} alt='facebook' />
                  </a></li>
                  <li><a href='https://web.whatsapp.com/'>
                    <img src={whatsappIcon} alt='whatsapp' />
                  </a></li>
                  <li><a href='https://mail.google.com/'>
                    <img src={mailIcon} alt='email' />
                  </a></li>
                  <li><a href='https://www.youtube.com/'>
                    <img src={youtubeIcon} alt='youtube'/>
                    </a></li>
                </ul>
            </div>
          </div>
      </div>
      <div className='footer__copyRight'>
        <p>&copy;2024 TANJIM AQUA - All Right reserved! </p>
      </div>
    </div>
  )
}

export default Index;