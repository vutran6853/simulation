import React, { Component } from 'react';
import header from './header.css';
import Logo  from './circle.svg';

class Header extends Component {

  render() { 
    return ( 
      <div className='header' >
        <img src={ Logo }  className="header-logo" alt='Logo' ></img>
        <h3>SHELFIE</h3>
      </div>
     );
  }
}
 
export default Header;