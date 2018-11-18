export const AUTHORIZE_PAYMENT = 'AUTHORIZE_PAYMENT';
const postAuthorizePayment = (uri, body) => ({
  type: AUTHORIZE_PAYMENT,
  request: client => client(uri, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }),
});

export default postAuthorizePayment;
