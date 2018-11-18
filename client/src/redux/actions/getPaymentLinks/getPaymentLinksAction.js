export const GET_PAYMENT_LINKS = 'GET_PAYMENT_LINKS';
const getPaymentLinks = () => ({
  type: GET_PAYMENT_LINKS,
  request: client => client('http://localhost:2000/api/payments/', {
    method: 'GET',
  }),
});

export default getPaymentLinks;
