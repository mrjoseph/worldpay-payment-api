import paymentsReducer from './paymentsReducer';
import { GET_PAYMENT_LINKS } from '../../actions/getPaymentLinks/getPaymentLinksAction';

const INITIAL_STATE = {};

describe('Payments reducer', () => {
  it('Should return initial state', () => {
    expect(paymentsReducer(undefined)).toEqual(INITIAL_STATE);
  });

  it('Should return GET_PAYMENT_LINKS with SUCCESS', () => {
    const ACTION = {
      type: `${GET_PAYMENT_LINKS}.SUCCESS`,
      result: {
        _links: {
          resourceTree: {
            href: 'https://access.worldpay.com/payments/resourceTree',
          },
          'payments:authorize': {
            href: 'https://access.worldpay.com/payments/authorizations',
          },
          'payments:events': {
            href: 'https://access.worldpay.com/payments/events',
          },
          curies: [
            {
              name: 'payments',
              href: 'https://access.worldpay.com/rels/payments/{rel}',
              templated: true,
            },
          ],
        },
      },
    };

    const stateAfter = {
      paymentLinks: {
        _links: {
          resourceTree: {
            href: 'https://access.worldpay.com/payments/resourceTree',
          },
          'payments:authorize': {
            href: 'https://access.worldpay.com/payments/authorizations',
          },
          'payments:events': {
            href: 'https://access.worldpay.com/payments/events',
          },
          curies: [
            {
              name: 'payments',
              href: 'https://access.worldpay.com/rels/payments/{rel}',
              templated: true,
            },
          ],
        },
      },
    };

    expect(paymentsReducer(INITIAL_STATE, ACTION)).toEqual(stateAfter);
  });
});
