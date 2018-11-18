import authorizePaymentReducer from './authorizePayments';
import { AUTHORIZE_PAYMENT } from '../../actions/postAuthorizePayment/postAuthorizePayment';

const INITIAL_STATE = {};

describe('Authorized payment reducer', () => {
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
            href: 'http://localhost:2000/api/payments/authorizations/cancellations/eyJrIjoiazNhYjYzMiJ9',
          },
          'payments:settle': {
            href: 'http://localhost:2000/api/payments/settlements/full/eyJrIjoiazNhYjYzMiJ9',
          },
          'payments:partialSettle': {
            href: 'http://localhost:2000/api/payments/settlements/partials/eyJrIjoiazNhYjYzMiJ9',
          },
          'payments:events': {
            href: 'http://localhost:2000/api/payments/events/eyJrIjoiazNhYjYzMiJ9',
          },
          curies: [
            {
              name: 'payments',
              href: 'http://localhost:2000/api/rels/payments/{rel}',
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
            href: 'http://localhost:2000/api/payments/authorizations/cancellations/eyJrIjoiazNhYjYzMiJ9',
          },
          'payments:settle': {
            href: 'http://localhost:2000/api/payments/settlements/full/eyJrIjoiazNhYjYzMiJ9',
          },
          'payments:partialSettle': {
            href: 'http://localhost:2000/api/payments/settlements/partials/eyJrIjoiazNhYjYzMiJ9',
          },
          'payments:events': {
            href: 'http://localhost:2000/api/payments/events/eyJrIjoiazNhYjYzMiJ9',
          },
          curies: [
            {
              name: 'payments',
              href: 'http://localhost:2000/api/rels/payments/{rel}',
              templated: true,
            },
          ],
        },
      },
    };

    expect(authorizePaymentReducer(INITIAL_STATE, ACTION)).toEqual(stateAfter);
  });
  it('Should return GET_PAYMENT_LINKS with (FAILED)', () => {
    const ACTION = {
      type: `${AUTHORIZE_PAYMENT}.FAILED`,
      result: {
        outcome: 'authorized',
        _links: {
          'payments:cancel': {
            href: 'http://localhost:2000/api/payments/authorizations/cancellations/eyJrIjoiazNhYjYzMiJ9',
          },
          'payments:settle': {
            href: 'http://localhost:2000/api/payments/settlements/full/eyJrIjoiazNhYjYzMiJ9',
          },
          'payments:partialSettle': {
            href: 'http://localhost:2000/api/payments/settlements/partials/eyJrIjoiazNhYjYzMiJ9',
          },
          'payments:events': {
            href: 'http://localhost:2000/api/payments/events/eyJrIjoiazNhYjYzMiJ9',
          },
          curies: [
            {
              name: 'payments',
              href: 'http://localhost:2000/api/rels/payments/{rel}',
              templated: true,
            },
          ],
        },
      },
    };
    const stateAfter = { undefined };
    expect(authorizePaymentReducer(INITIAL_STATE, ACTION)).toEqual(stateAfter);
  });
});
