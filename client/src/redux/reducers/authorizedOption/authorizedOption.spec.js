import authorizePaymentReducer from './authorizedOption';
import { AUTHORIZE_PAYMENT } from '../../actions/postAuthorizePayment/postAuthorizePayment';

const INITIAL_STATE = {};

describe.skip('Authorized payment reducer', () => {
  it('Should return initial state', () => {
    expect(authorizePaymentReducer(undefined)).toEqual(INITIAL_STATE);
  });

  it('Should return GET_PAYMENT_LINKS with SUCCESS', () => {
    const ACTION = {
      type: `${AUTHORIZE_PAYMENT}.SUCCESS`,
      result: {
        outcome: 'authorized',
        _links: {
          'payments:cancel': {
            href: 'https://access.worldpay.com/payments/authorizations/cancellations/eyJrIjoiazNhYjYzMiJ9',
          },
          'payments:settle': {
            href: 'https://access.worldpay.com/payments/settlements/full/eyJrIjoiazNhYjYzMiJ9',
          },
          'payments:partialSettle': {
            href: 'https://access.worldpay.com/payments/settlements/partials/eyJrIjoiazNhYjYzMiJ9',
          },
          'payments:events': {
            href: 'https://access.worldpay.com/payments/events/eyJrIjoiazNhYjYzMiJ9',
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
      authorized: {
        outcome: 'authorized',
        _links: {
          'payments:cancel': {
            href: 'https://access.worldpay.com/payments/authorizations/cancellations/eyJrIjoiazNhYjYzMiJ9',
          },
          'payments:settle': {
            href: 'https://access.worldpay.com/payments/settlements/full/eyJrIjoiazNhYjYzMiJ9',
          },
          'payments:partialSettle': {
            href: 'https://access.worldpay.com/payments/settlements/partials/eyJrIjoiazNhYjYzMiJ9',
          },
          'payments:events': {
            href: 'https://access.worldpay.com/payments/events/eyJrIjoiazNhYjYzMiJ9',
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

    expect(authorizePaymentReducer(INITIAL_STATE, ACTION)).toEqual(stateAfter);
  });
});
