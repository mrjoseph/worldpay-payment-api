import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Form from '../../components/form/form';


class Payments extends Component {
  componentDidMount() {
    const { getPaymentLinks } = this.props;
    getPaymentLinks();
  }

  componentDidUpdate() {
    const { outcome, history } = this.props;
    if (outcome === 'authorized') {
      history.push('/authorization-successful');
    }
  }

  render() {
    const { content: { formData }, paymentLinks, postAuthorizePayment } = this.props;
    return (
      <Fragment>
        <div className="row">
          <div className="col-xs-6 col-md-6">
            <div>
              <h3>Order Summary</h3>
              <p>Description: Book</p>
              <p>Amount: £780</p>
            </div>
          </div>
          <div className="col-xs-6 col-md-6">
            <div className="billing-address">
              <h3>Billing address</h3>
              <p>
                  Worldpay
                <br />
                  270-289 Milton Rd,
                <br />
                  Milton,
                <br />
                  Cambridge GB,
                <br />
                  CB4 0WE CAMBS
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="panel-body">
          <h3>Payment details</h3>
          <Form
            formData={formData}
            paymentLinks={paymentLinks}
            postAuthorizePayment={postAuthorizePayment}
          />
        </div>
      </Fragment>
    );
  }
}

Payments.propTypes = {
  history: PropTypes.shape([
    PropTypes.number,
    PropTypes.string,
  ]),
  authorized: PropTypes.shape([
    PropTypes.object,
    PropTypes.string,
  ]),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  paymentLinks: PropTypes.objectOf(PropTypes.string),
  getPaymentLinks: PropTypes.func.isRequired,
  authorizePayment: PropTypes.func,
};

Payments.defaultProps = {
  history: {},
  authorized: {},
  paymentLinks: {},
  postAuthorizePayment: () => {},
};
export default Payments;
