import React, { Component } from 'react';
import Input from '../input';
import OptionSelect from '../option-select/option-select';
import './form.scss';
class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      cards: {
        visa: 'Visa',
        masterCard: 'Master Card',
        ammex: 'Ammex'
      }
    }
  }
  render() {
    const { cvc, cardExpiry, couponCode, pay, cardNumber, cardHoldersName } = this.props.content;
    const { cards } = this.state;
    return (
        <form role="form" id="payment-form" method="POST" action="">
          <div className="row">
            <OptionSelect handleChange={this.handleChange} cards={cards}/>
            <div className="col-xs-6 col-md-6">
              <Input {...cardNumber} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-md-6">
              <Input {...cardHoldersName} />
            </div>
            <div className="col-xs-6 col-md-6 pull-right">
              <Input {...cvc} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-md-6">
              <Input {...cardExpiry} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-md-6">
              <Input {...couponCode} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-md-6">
              <button
                  className="subscribe btn btn-success btn-lg btn-block"
                  type="button">{pay}
              </button>
            </div>
          </div>
        </form>
    )
  }
}

export default Form;
