import React from 'react';
import PropTypes from 'prop-types';

const AuthorizedOptions = ({ handleSettlePayment, handlePartialRefund, handleCancelPayment, handleQueryPayment }) => {
  return(
      <div>
        <button id="settle" type="button" className="btn btn-success settle" onClick={handleSettlePayment}>Settle payment</button>
        <button type="button" className="btn btn-secondary" onClick={handlePartialRefund}>
          Partially settle
        </button>
        <button type="button" className="btn btn-dark" onClick={handleCancelPayment}>Cancel</button>
        <button type="button" className="btn btn-primary" onClick={handleQueryPayment}>
          View details of your payment
        </button>
      </div>
  );
};

AuthorizedOptions.propTypes = {
  handleSettlePayment: PropTypes.func.isRequired,
};

export default AuthorizedOptions;
