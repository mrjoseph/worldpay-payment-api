import React, { Component, Fragment } from 'react';
import americanExpress from './images/americanExpress.png';
import visa from './images/visa.png';
import mastercard from './images/mastercard.png';
 import './optionSelect.scss';
class OptionSelect extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    }
  }
  handleChange(event) {
    const { onChange } = this.props;
    if (event){
      this.setState({value: event.target.value});
      onChange(event);
    }
  };
  render(){
    if (this.props.cards) {
      const { cards: { cardOption, name} } = this.props;
      const { value } = this.state;
      return (
          <Fragment>
            <div className="col-8 col-md-4">
              <span className="card-selection">SELECT A CARD</span>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label className="input-group-text"
                         htmlFor="inputGroupSelect01">Options</label>
                </div>
                <select
                    className="custom-select"
                    id="inputGroupSelect01"
                    onChange={this.handleChange}
                    value={value}
                    name={name}
                >
                  <option name={name} value="">Choose card</option>
                  {
                    Object.keys(cardOption).map((val) => {

                    return (
                        <option key={cardOption[val]} name={name} value={val}>{cardOption[val]}</option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-4 col-md-2 flag">
              <div className="flags">
              {value === 'americanExpress' && <img src={americanExpress} className="american-express" alt="American Express" />}
              {value === 'visa' && <img src={visa} className="visa" alt="Visa" />}
              {value === 'masterCard' && <img src={mastercard} className="masterCard" alt="Mastercard" />}
              </div>
            </div>
          </Fragment>
      );
    }
    return null;
  }
}

OptionSelect.propTypes = {

}

export default OptionSelect;
