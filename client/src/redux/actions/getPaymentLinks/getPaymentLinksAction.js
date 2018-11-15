export const GET_PAYMENT_LINKS = 'GET_PAYMENT_LINKS';
const getPaymentLinks = body => {
  return {
    type: GET_PAYMENT_LINKS,
    request: client => client('http://localhost:2000/api/payments/', {
      method: 'GET',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    }),
  }
};

export default getPaymentLinks;

