import React, { Component, Fragment } from 'react';

class OptionSelect extends Component {
  constructor(){
    super();
    this.state = {
      value: ''
    }
  }
  handleChange = (event) => {
    this.setState({value: event.target.value});
  };
  render(){
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
                value={this.state.value}
            >
              <option selected>visa...</option>
              <option value="masterCard">master card</option>
              <option value="amex">amex</option>
              <option value="monzo">monzo</option>
            </select>
          </div>
        </div>
        <div className="col-4 col-md-2 flag">
          <div>{this.state.value}</div>
        </div>
      </Fragment>
    );
  }
}

export default OptionSelect;
