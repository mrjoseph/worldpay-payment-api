import React, { Component } from "react";
import PropTypes from "prop-types";
import "./authorization-successful.scss";
import AuthorizedOptions
  from "../../components/authorized-options/Authorized-options";
import RefundOptions from "../../components/refund-options/Refind-options";

class AuthorizationSuccessful extends Component {
  constructor() {
    super();
    this.handleSettlePayment = this.handleSettlePayment.bind(this);
    this.handlePartialRefund = this.handlePartialRefund.bind(this);
    this.handleCancelPayment = this.handleCancelPayment.bind(this);
    this.handleQueryPayment = this.handleCancelPayment.bind(this);
  }

  handleSettlePayment() {
    const { settlePayment, authorized: { settle } } = this.props;
      if (settle) settlePayment(settle);
  }
  handlePartialRefund() {
    const { partialSettlePayment, authorized: { partialSettle } } = this.props;
    if (partialSettle) partialSettlePayment(partialSettle);
  }

  handleCancelPayment() {
    const { cancelPayment, authorized: { cancel } } = this.props;
    if(cancel) cancelPayment(cancel);
  }

  handleQueryPayment() {
    const { queryPayment, authorized: { events } } = this.props;
    if(events) queryPayment(events);
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
          <AuthorizedOptions
              handleSettlePayment={this.handleSettlePayment}
              handlePartialRefund={this.handlePartialRefund}
              handleCancelPayment={this.handleCancelPayment}
              handleQueryPayment={this.handleQueryPayment}
          />
        </div>
        {refund && <RefundOptions/>}
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
