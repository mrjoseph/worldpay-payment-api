import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, className, name, placeholder, autoComplete, required, label } = this.props;
    return (
        <div className="form-group">
          <label htmlFor={name}>{label}</label>
          <input
              type={type}
              className={className}
              name={name}
              placeholder={placeholder}
              autoComplete={autoComplete}
              required={required}
          />
        </div>
    );
  }
}

export default Input;

