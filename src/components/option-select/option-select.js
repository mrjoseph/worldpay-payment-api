import React, { Component, Fragment } from 'react';

class OptionSelect extends Component {
  constructor(props){
    super(props);
    const { cards } = this.props;
    this.state = {
      value: cards && cards.visa
    }
  }
  handleChange = (event) => {
    const { onChange } = this.props;
    this.setState({value: event.target.value});
    onChange(event);
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
                  {Object.keys(cardOption).map((val) => {
                    return (
                        <option key={cardOption[val]} name={name} value={val}>{cardOption[val]}</option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-4 col-md-2 flag">
              <div>{value}</div>
            </div>
          </Fragment>
      );
    }
    return null;
  }
}

export default OptionSelect;
