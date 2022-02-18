import React from 'react'
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
      <div className='container'>
        <Link to={'/'}>Register</Link>
        <Link to={'/movies'}>Movies</Link>
      </div>
  )
}

export default Header;