import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import createApiMiddleware from '../../createApiMiddleware';
import api from '../../api';
import postAuthorizePayment, { AUTHORIZE_PAYMENT } from './postAuthorizePayment';

const middlewares = [thunk, createApiMiddleware(api)];
const mockStore = configureMockStore(middlewares);

const store = mockStore({});

describe('GetPaymentLinksAction', () => {
  let path;
  const payload = {
    transactionReference: 'your-transaction-reference',
    instruction: {
      description: 'book',
      value: {
        currency: 'GBP',
        amount: 789,
      },
      paymentInstrument: {
        cvc: '666',
        type: 'card/plain',
        cardNumber: '4444333322221111',
        cardHolderName: 'John Appleseed',
        billingAddress: {
          address1: 'Worldpay',
          address2: ' 270-289 Milton Rd',
          address3: 'Milton',
          city: 'Cambridge',
          countryCode: 'GB',
          postalCode: 'CB4 0WE',
          state: 'CAMBS',
        },
        cardExpiryDate: {
          month: 7,
          year: 2099,
        },
      },
    },
  };
  const fetchPayload = {
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
  };
  beforeEach(() => {
    path = '/api/payments/authorizations';
  });

  afterEach(() => {
    store.clearActions();
    fetchMock.reset();
    fetchMock.restore();
  });

  it('Should return action type AUTHORIZE_PAYMENT (LOADING AND SUCCESS)', async () => {
    fetchMock.post(path, { status: 201, body: fetchPayload });
    await store.dispatch(postAuthorizePayment(path, payload));
    const expected = [
      { type: `${AUTHORIZE_PAYMENT}.LOADING` }, {
        type: `${AUTHORIZE_PAYMENT}.SUCCESS`,
        result: fetchPayload,
      }];
    const actions = await store.getActions();
    expect(actions).toEqual(expected);
  });

  describe('When a request to the incorrect endpoint is made eg: url is wrong', () => {
    it('Should return action type AUTHORIZE_PAYMENT (LOADING AND FAILED)', async () => {
      const errorExpectedPayload = {
        error: 'Sorry can\'t find that!',
      };
      const uri = 'http://localhost:2000/api/payments/authorized';
      fetchMock.post(uri, { status: 404, body: errorExpectedPayload });
      await store.dispatch(postAuthorizePayment(uri, payload));
      const expected = [
        { type: `${AUTHORIZE_PAYMENT}.LOADING` }, {
          type: `${AUTHORIZE_PAYMENT}.FAILED`,
          error: { ...errorExpectedPayload },
        }];
      const actions = await store.getActions();
      expect(actions).toEqual(expected);
    });
  });
});
