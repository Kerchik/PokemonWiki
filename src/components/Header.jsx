import React from 'react'
import logo from '../img/pokemon.png';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
      <div className="Header" >
        <Link to="" >
            <img src={logo}  alt="pokemonLogo" className="graficLogo" />
        </Link>
      </div>
    )
}

export default Header