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
    const {
      settlePayment, authorized: {
        _links: {
          'payments:settle': {
            href,
          },
        },
      },
    } = this.props;

    settlePayment(href);
  }

  render() {
    return (
      <div className="summary-view">
        <div className="alert alert-success" role="alert">
          Authorization successful
        </div>
        <p>
            Your authorization was successful. Please pick one of the options
          below to continue
        </p>
        <AuthorizedOptions handleSettlePayment={this.handleSettlePayment} />
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
