import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div className="row display-tr">
          <h3 className="panel-title display-td">Payment Details</h3>
          <div className="display-td">
            <img alt="" className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png"/>
          </div>
        </div>
    );
  }
}

export default Header;
