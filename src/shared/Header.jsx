import React from 'react'
import { Link } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faClapperboard } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
        <div className='container-header'>
            <div className='container-logo'>
                <FontAwesomeIcon icon={faClapperboard} />
                <h1 style={{fontFamily: 'Nunito'}}>Mooovies</h1>
            </div>
            <Link to={'/'}>Register</Link>
            <Link to={'/movies'}>Movies</Link>
        </div>
    )
};

export default Header;