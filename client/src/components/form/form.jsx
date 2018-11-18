import React, { Component } from 'react';
import Input from '../input/input';
import OptionSelect from '../option-select/option-select';
import shape from '../../utils/shape/shape';
import './form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    const {
      formData: {
        cardCVC,
        cardExpiryMonth,
        cardExpiryYear,
        cardNumber,
        cardHoldersName,
        cards,
      },
    } = this.props;
    this.state = {
      cardCVC: cardCVC.value,
      cardExpiryMonth: cardExpiryMonth.value,
      cardExpiryYear: cardExpiryYear.value,
      cardNumber: cardNumber.value,
      cardHoldersName: cardHoldersName.value,
      cards: cards.cardOption.visa,
    };
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { postAuthorizePayment, paymentLinks: { authorize } } = this.props;
    console.log('authorize', authorize)
    postAuthorizePayment(authorize, shape(this.state));
  }

  render() {
    const {
      formData: {
        cardCVC,
        cardExpiryMonth,
        cardExpiryYear,
        pay,
        cardNumber,
        cardHoldersName,
        cards,
      },
    } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <OptionSelect onChange={this.handleChange} cards={cards} value={this.state.cards} />
          <div className="col-xs-6 col-md-6 card-number">
            <Input {...cardNumber} onChange={this.handleChange} value={this.state.cardNumber} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-6">
            <Input {...cardHoldersName} onChange={this.handleChange} value={this.state.cardHoldersName} />
          </div>
          <div className="col-xs-6 col-md-6 pull-right">
            <Input {...cardCVC} onChange={this.handleChange} value={this.state.cardCVC} />
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-3">
            <Input {...cardExpiryMonth} onChange={this.handleChange} value={this.state.cardExpiryMonth} />
          </div>
          <div className="col-6 col-md-3">
            <Input {...cardExpiryYear} onChange={this.handleChange} value={this.state.cardExpiryYear} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-6">
            <input className="subscribe btn btn-success btn-lg btn-block" type="submit" value={pay} onSubmit={this.handleSubmit} />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
