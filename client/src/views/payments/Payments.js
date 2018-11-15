import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Form from '../../components/form/form';
import getPaymentLinks from '../../redux/actions/getPaymentLinks/getPaymentLinksAction';
export class Payments extends Component {
  componentDidMount () {
    this.props.getPaymentLinks();
  }
  render() {
    const { content: { formData},paymentLinks } = this.props;
    return (
        <Fragment>
          <div className="row">
            <div className="col-xs-6 col-md-6">
              <div>
                <h3>Item</h3>
                <p>Description: Book</p>
                <p>Price: £780</p>
              </div>
            </div>
            <div className="col-xs-6 col-md-6">
              <div>
                <h3>Billing address</h3>
                <p>
                  Worldpay <br />
                  270-289 Milton Rd,<br />
                  Milton,<br />
                  Cambridge GB,<br />
                  CB4 0WE CAMBS<br />
                </p>
              </div>
            </div>
          </div>

          <div className="panel-body">
            <Form content={formData} paymentLinks={paymentLinks} />
          </div>
        </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    paymentLinks: state.paymentsReducer.paymentLinks,
  }
};
// export default Payments;
export default connect(mapStateToProps,{getPaymentLinks})(Payments);
