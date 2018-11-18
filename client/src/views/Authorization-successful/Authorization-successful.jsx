import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './authorization-successful.scss';
import AuthorizedOptions from '../../components/authorized-options/Authorized-options';

class AuthorizationSuccessful extends Component {
  constructor() {
    super();
    this.handleSettlePayment = this.handleSettlePayment.bind(this);
  }

  handleSettlePayment() {
    const { settlePayment, settledLinks, authorized: { settle } } = this.props;
      if (settle) settlePayment(settle);
  }

  render() {
    const { settledLinks: { refund } } = this.props;
    return (
      <div className="summary-view">
        <div className="alert alert-success" role="alert">
          Authorization successful
        </div>
        <p>
            Your authorization was successful. Please pick one of the options
          below to continue
        </p>
        <div>
          <h3>Authorization options</h3>
          <AuthorizedOptions handleSettlePayment={this.handleSettlePayment} />
        </div>
        {refund && <div className="settled-payment-options">
          <h3>Refund options</h3>
          <button type="button" className="btn btn-primary">Refund</button>
          <button type="button" className="btn btn-secondary">Partial refund</button>
        </div>}
      </div>
    );
  }
}

AuthorizationSuccessful.propTypes = {
  settlePayment: PropTypes.func.isRequired,
  authorized: PropTypes.shape([
    PropTypes.sting,
    PropTypes.object,
  ]),
};

AuthorizationSuccessful.defaultProps = {
  authorized: {},
};

export default AuthorizationSuccessful;
