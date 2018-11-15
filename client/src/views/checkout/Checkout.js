import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
class Checkout extends Component {
  render() {

    return (
      <div>
        <Link to="/payments">Proceed to checkout</Link>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps,mapDispatchToProps)(Checkout);
