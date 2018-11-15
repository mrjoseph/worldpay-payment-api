import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
  render() {
    return (
        <header className="row display-tr">
          <h3 className="panel-title display-td">Payment Details</h3>
          <div className="display-td">
            <img alt="" className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png"/>
          </div>
        </header>
    );
  }
}

export default Header;
