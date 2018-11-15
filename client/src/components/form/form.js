import React, { Component } from 'react';
import Input from '../input/input';
import OptionSelect from '../option-select/option-select';
import './form.scss';
class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      cardCVC: null,
      cardExpiryMonth: null,
      cardExpiryYear: null,
      cardNumber: null,
      cardHoldersName: null,
      cards: null,
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const {
      paymentLinks: {
        data: {
          _links:
          {
            'payments:authorize': {
            href
          }
          }
        }
      }
    } = this.props;
    console.log(href);

  };
  handleChange (e) {
    const { value, name } = e.target;
    this.setState({ [name]: value})

  }
  render() {
    const { content: {
      cvc,
      cardExpiryMonth,
      cardExpiryYear,
      pay,
      cardNumber,
      cardHoldersName,
      cards,
    }
    } = this.props;
    if(this.props.content) {
      return (
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <OptionSelect onChange={this.handleChange} cards={cards}/>
              <div className="col-xs-6 col-md-6 card-number">
                <Input {...cardNumber} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                <Input {...cardHoldersName} onChange={this.handleChange} />
              </div>
              <div className="col-xs-6 col-md-6 pull-right">
                <Input {...cvc} onChange={this.handleChange} />
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-md-3">
                <Input {...cardExpiryMonth} onChange={this.handleChange} />
              </div>
              <div className="col-6 col-md-3">
                <Input {...cardExpiryYear} onChange={this.handleChange} />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                <input  className="subscribe btn btn-success btn-lg btn-block" type="submit" value={pay} onSubmit={this.handleSubmit}/>
              </div>
            </div>
          </form>
      )
    }
  }
}

export default Form;
