import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Checkout = () => <div><Link to="/payment">Proceed to checkout</Link></div>;

export default withRouter(Checkout);
