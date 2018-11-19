import React from 'react';
import './header.scss';
import logo from './images/worldpay.png';
const Header = () => (
  <header className="row display-tr">
    <div className="display-td">
      <img alt="" className="logo" src={logo} />
    </div>
  </header>
);

export default Header;
