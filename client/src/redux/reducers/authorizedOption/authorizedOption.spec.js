import settlePaymentReducer from './authorizedOption';
import { AUTHORIZED_OPTION_SETTLE_PAYMENT } from '../../actions/authorizedOptionAction/authorizedOptionAction';

const INITIAL_STATE = {};
describe('Authorized options', () => {
  describe('settlePaymentReducer', () => {
    it('should return initial state', () => {
      expect(settlePaymentReducer(undefined)).toEqual(INITIAL_STATE);
    });
  });
  it('should return AUTHORIZED_OPTION_SETTLE_PAYMENT with (SUCCESS)', () => {
    const ACTION = {
      type: `${AUTHORIZED_OPTION_SETTLE_PAYMENT}.SUCCESS`,
      result: {
        _links: {
          'payments:refund': {
            href: 'http://localhost:2000/api/payments/settlements/refunds/full/eyJrIjoiazNhYjYzMiJ9',
          },
          'payments:partialRefund': {
            href: 'http://localhost:2000/api/payments/settlements/refunds/partials/eyJrIjoiazNhYjYzMiJ9',
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
        _links: {
          curies: [{ href: 'http://localhost:2000/api/rels/payments/{rel}', name: 'payments', templated: true }], 'payments:events': { href: 'http://localhost:2000/api/payments/events/eyJrIjoiazNhYjYzMiJ9' }, 'payments:partialRefund': { href: 'http://localhost:2000/api/payments/settlements/refunds/partials/eyJrIjoiazNhYjYzMiJ9' }, 'payments:refund': { href: 'http://localhost:2000/api/payments/settlements/refunds/full/eyJrIjoiazNhYjYzMiJ9' },
        },
      },
    };
    expect(settlePaymentReducer(INITIAL_STATE, ACTION)).toEqual(stateAfter);
  });

  it('should return AUTHORIZED_OPTION_SETTLE_PAYMENT with (FAILED)', () => {
    const ACTION = {
      type: `${AUTHORIZED_OPTION_SETTLE_PAYMENT}.FAILED`,
      result: {
        _links: {
          'payments:refund': {
            href: 'http://localhost:2000/api/payments/settlements/refunds/full/eyJrIjoiazNhYjYzMiJ9',
          },
          'payments:partialRefund': {
            href: 'http://localhost:2000/api/payments/settlements/refunds/partials/eyJrIjoiazNhYjYzMiJ9',
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
    expect(settlePaymentReducer(INITIAL_STATE, ACTION)).toEqual(stateAfter);
  });
});
