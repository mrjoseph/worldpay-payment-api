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
    if (partialSettle) partialSettlePayment(partialSettle, {
      "value": {
        "currency": "GBP",
        "amount": 3
      },
      "reference": "test123"
    });
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
    const { cancelled: { cancelledLink }, settledLinks: { refund } } = this.props;
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
              handlePartialSettle={this.handlePartialSettle}
              handleCancelPayment={this.handleCancelPayment}
              handleQueryPayment={this.handleQueryPayment}
          />
        </div>
        {refund && <RefundOptions/>}
        {cancelledLink &&
        <div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Cancel payment</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the
                card title and make up the bulk of the card's content.</p>
              <a href="#" className="card-link">Cancel payment</a>

            </div>
          </div>
        </div>
        }
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
