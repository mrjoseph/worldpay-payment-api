import React from "react";

const RefundOptions = () => {
  return <div className="settled-payment-options">
    <h3>Refund options</h3>
    <button type="button" className="btn btn-primary">Refund</button>
    <button type="button" className="btn btn-secondary">Partial refund</button>
  </div>;
}

export default RefundOptions;
