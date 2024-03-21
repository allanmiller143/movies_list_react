import React from 'react';
import './Header.css';
import Search from '../Search/Search';

function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <div >
          logo
        </div>
        <Search />
      </div>
      
    </div>
  );
}

export default Header;
