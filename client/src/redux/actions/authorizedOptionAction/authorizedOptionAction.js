export const CANCEL_PAYMENT = 'CANCEL_PAYMENT';
export const AUTHORIZED_OPTION_SETTLE_PAYMENT = 'AUTHORIZED_OPTION_SETTLE_PAYMENT';
export const PARTIAL_AUTHORIZED_OPTION_SETTLE_PAYMENT = 'PARTIAL_AUTHORIZED_OPTION_SETTLE_PAYMENT';
export const QUERY_PAYMENT = 'QUERY_PAYMENT';

export const fetchData = (uri, body, action) => ({
  type: action,
  request: client => client(uri, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }),
});

export const settlePayment = (uri, body) => (dispatch) => {
  dispatch(fetchData(uri, body, AUTHORIZED_OPTION_SETTLE_PAYMENT));
};

export const cancelPayment = () => {};

export const partialSettlePayment = () => {};

export const queryPayment = () => {};
