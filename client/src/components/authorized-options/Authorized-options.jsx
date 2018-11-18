import React from 'react';
import PropTypes from 'prop-types';

const AuthorizedOptions = ({ handleSettlePayment }) => <>
  <button type="button" className="btn btn-success" onClick={handleSettlePayment}>Settle payment</button>
  <button type="button" className="btn btn-secondary">
      Partially settle
  </button>
  <button type="button" className="btn btn-dark">Cancel</button>
  <button type="button" className="btn btn-primary">
      View details of your payment
  </button>
  </>;

AuthorizedOptions.propTypes = {
  handleSettlePayment: PropTypes.func.isRequired,
};

export default AuthorizedOptions;
