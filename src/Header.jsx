import React from 'react'
import logo from './sw.png';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
    <div className="Header">
          
            <img src={logo} className="graficLogo" />
          
      </div>
    )
}

export default Header