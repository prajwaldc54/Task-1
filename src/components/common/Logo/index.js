import React from 'react';
import logo from './logo.png';
import './styles.css';

const Logo = () => {
  return(
  <div className='header-content_logo'>
    <div>
      <img src={logo} alt='logo' />
      <span>
        <b>Tried</b>
      </span>
    </div>
    <p>
      <b>Restaurant with some BBQ</b>
    </p>
    
  </div>
);
  }

export default Logo;
