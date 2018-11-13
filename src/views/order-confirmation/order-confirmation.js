import React, { Component, Fragment } from 'react';
import Form from '../../components/form/form';

class OrderConfirmation extends Component {
  render() {
    const { content: { formData} } = this.props;
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
            <Form content={formData}/>
          </div>
        </Fragment>
    );
  }
}

export default OrderConfirmation;
