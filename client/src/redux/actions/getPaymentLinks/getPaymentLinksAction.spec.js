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
  const expectedPayload = {
    data: {
      _links: {
        resourceTree: {
          href: 'http://localhost:2000/api/payments/resourceTree',
        },
        'payments:authorize': {
          href: 'http://localhost:2000/api/payments/authorizations',
        },
        'payments:events': {
          href: 'http://localhost:2000/api/payments/events',
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

  beforeEach(() => {
    path = 'http://localhost:2000/api/payments/';
  });

  afterEach(() => {
    store.clearActions();
    fetchMock.restore();
  });


  describe('When a request to the correct endpoint is made', () => {
    it('Should return action type GET_PAYMENT_LINKS (LOADING AND SUCCESS)', async () => {
      fetchMock.get(path, { status: 201, body: expectedPayload });
      await store.dispatch(getPaymentLinks());
      const expected = [
        { type: `${GET_PAYMENT_LINKS}.LOADING` }, {
          type: `${GET_PAYMENT_LINKS}.SUCCESS`,
          result: expectedPayload,
        }];
      const actions = await store.getActions();
      expect(actions).toEqual(expected);
    });
  });

  describe('When a request to the incorrect endpoint is made eg: url is wrong', () => {
    it('Should return action type GET_PAYMENT_LINKS (LOADING AND FAILED)', async () => {
      const errorExpectedPayload = {
        error: 'Sorry can\'t find that!',
      };
      fetchMock.get(path, { status: 404, body: errorExpectedPayload });
      await store.dispatch(getPaymentLinks());
      const expected = [
        { type: `${GET_PAYMENT_LINKS}.LOADING` }, {
          type: `${GET_PAYMENT_LINKS}.FAILED`,
          error: { ...errorExpectedPayload },
        }];
      const actions = await store.getActions();
      expect(actions).toEqual(expected);
    });
  });
});
