import * as React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClapperboard } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
        <div className='container-header'>
            <div className='container-logo'>
                <FontAwesomeIcon icon={faClapperboard} className='logo'/>
                <h1 style={{fontFamily: 'Nunito'}}>Mooovies</h1>
            </div>
            <div className='header-menu'>
                <Link to={'/'}>Register</Link>
                <Link to={'/movies'}>Movies</Link>
            </div>
        </div>
    )
};

export default Header;