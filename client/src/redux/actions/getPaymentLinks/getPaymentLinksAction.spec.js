import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import createApiMiddleware from '../../createApiMiddleware';
import api from '../../api';
import getPaymentLinks, { GET_PAYMENT_LINKS } from './getPaymentLinksAction';

const middlewares = [thunk, createApiMiddleware(api)];
const mockStore = configureMockStore(middlewares);

const store = mockStore({});

describe('GetPaymentLinksAction', () => {
  let path;
  let fetchPayload = {
    data: {
      "_links": {
        "resourceTree": {
          "href": "https://access.worldpay.com/payments/resourceTree"
        },
        "payments:authorize": {
          "href": "https://access.worldpay.com/payments/authorizations"
        },
        "payments:events": {
          "href": "https://access.worldpay.com/payments/events"
        },
        "curies": [
          {
            "name": "payments",
            "href": "https://access.worldpay.com/rels/payments/{rel}",
            "templated": true
          }
        ]
      }
    }
  };

  beforeEach(() => {
    path = 'http://localhost:2000/api/payments/'
  });

  afterEach(() => {
    store.clearActions();
    fetchMock.restore();
  });

  it('Should return action type GET_PAYMENT_LINKS (LOADING AND SUCCESS)', async () => {
        fetchMock.get(path, { status: 201, body: fetchPayload });
        await store.dispatch(getPaymentLinks());
        const expected = [
          { type: `${GET_PAYMENT_LINKS }.LOADING` }, {
            type: `${GET_PAYMENT_LINKS }.SUCCESS`,
            result: fetchPayload,
          }];
        const actions = await store.getActions();
        expect(actions).toEqual(expected);
      });
});

