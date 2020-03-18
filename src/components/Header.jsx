import React from 'react'
import logo from '../img/sw.png';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
      <div className="Header" >
        <Link to="" >
            <img src={logo}  alt="swLogo" className="graficLogo" />
        </Link>
      </div>
    )
}

export default Header