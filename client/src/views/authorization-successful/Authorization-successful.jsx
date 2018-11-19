import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './authorization-successful.scss';
import AuthorizedOptions
  from '../../components/authorized-options/Authorized-options';
import SettledOptions from '../../components/settled-options/Settled-options';
import CancelledOptions from '../../components/cancelled-options/Cancelled-options';

class AuthorizationSuccessful extends Component {
  constructor() {
    super();
    this.handleSettlePayment = this.handleSettlePayment.bind(this);
    this.handlePartialSettle = this.handlePartialSettle.bind(this);
    this.handleCancelPayment = this.handleCancelPayment.bind(this);
    this.handleQueryPayment = this.handleQueryPayment.bind(this);
  }

  handleSettlePayment() {
    const { settlePayment, authorized: { settle } } = this.props;
    if (settle) settlePayment(settle);
  }

  handlePartialSettle() {
    const { partialSettlePayment, authorized: { partialSettle } } = this.props;
    if (partialSettle) {
      partialSettlePayment(partialSettle, {
        value: {
          currency: 'GBP',
          amount: 3,
        },
        reference: 'test123',
      });
    }
  }

  handleCancelPayment() {
    const { cancelPayment, authorized: { cancel } } = this.props;
    if (cancel) cancelPayment(cancel);
  }

  handleQueryPayment() {
    const { queryPayment, authorized: { events } } = this.props;
    if (events) queryPayment(events);
  }

  render() {
    const { cancelled: { cancelledLink }, settledLinks: { refund }, partial: { partialRefund } } = this.props;
    return (
      <div className="summary-view">
        <div className="alert alert-success" role="alert">
          Authorization successful
        </div>
        <p>
            Your authorization was successful. Please pick one of the options
          below to continue
        </p>
        <>
          <h5>Authorization options</h5>
          <AuthorizedOptions
            handleSettlePayment={this.handleSettlePayment}
            handlePartialSettle={this.handlePartialSettle}
            handleCancelPayment={this.handleCancelPayment}
            handleQueryPayment={this.handleQueryPayment}
          />
        </>
        {refund && <SettledOptions />}
        {cancelledLink
        && <CancelledOptions />
        }
        {partialRefund && (
        <div className="partial-settled-payment-options">
          <h5 className="card-title">Partial settle payment</h5>
          Render links for partial refund
        </div>
        )}
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
