import React from 'react';
import PropTypes from 'prop-types';

const AuthorizedOptions = ({
  handleSettlePayment, handlePartialSettle, handleCancelPayment, handleQueryPayment,
}) => (
      <>
        <button id="settle" type="button" className="btn btn-success settle" onClick={handleSettlePayment}>Settle payment</button>
        <button id="partial-settled" type="button" className="btn btn-secondary" onClick={handlePartialSettle}>
          Partially settle
        </button>
        <button type="button" className="btn btn-dark" onClick={handleCancelPayment}>Cancel</button>
        <button type="button" className="btn btn-primary" onClick={handleQueryPayment}>
          View details of your payment
        </button>
      </>
);

AuthorizedOptions.propTypes = {
  handleSettlePayment: PropTypes.func.isRequired,
};

export default AuthorizedOptions;
