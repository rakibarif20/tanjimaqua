import React from 'react'
// import { IoIosSearch } from "react-icons/io";
import logo from '../../../images/logo/logo.png'

// css link 
import  "./style.scss";

const Index = () => {
  return (
    <header>
        <div className="mainMenu">
        <div className='logoArea'>
            <div className='logoArea__logo'>
            <img src={logo} alt='logo'/>
            </div>
            <div className='logoArea__logoName'>
                <label>Tanjim aqua</label>
            </div>
        </div>
        <div className='searchArea'>
            <form className='form'>
                    <input type='text' placeholder='Search here' />
                <button type="sumbit">
                    Search
                {/* <IoIosSearch /> */}
                </button>
            </form>
        </div>
        <div className='menuList'>
            <ul>
                <li><a href='##'>home</a></li>
                <li><a href='##'>about</a></li>
                <li><a href='##'>product</a></li>
                <li><a href='##'>contact</a></li>
            </ul>
        </div>
        
        </div>
    </header>
  )
}

export default Index