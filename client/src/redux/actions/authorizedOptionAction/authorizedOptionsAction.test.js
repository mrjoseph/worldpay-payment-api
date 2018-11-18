import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import createApiMiddleware from '../../createApiMiddleware';
import api from '../../api';
import { settlePayment, fetchData, AUTHORIZED_OPTION_SETTLE_PAYMENT } from './authorizedOptionAction';

const middlewares = [thunk, createApiMiddleware(api)];
const mockStore = configureMockStore(middlewares);

const store = mockStore({});

describe('Authorized Option Action', () => {
  describe('settle payment', () => {
    const payload = {};
    const response = {

    };
    let path;
    beforeEach(() => {
      path = 'http://localhost:2000/api/payments/settlements/full/eyJrIjoiazNhYjYzMiJ9';
    });

    afterEach(() => {
      store.clearActions();
      fetchMock.reset();
      fetchMock.restore();
    });
    it('should return action type AUTHORIZED_OPTION_SETTLE_PAYMENT (LOADING AND SUCCESS)', async () => {
      fetchMock.post(path, { status: 201, body: response });
      settlePayment(path, payload, AUTHORIZED_OPTION_SETTLE_PAYMENT);
      await store.dispatch(fetchData(path, payload, AUTHORIZED_OPTION_SETTLE_PAYMENT));
      const expected = [
        { type: `${AUTHORIZED_OPTION_SETTLE_PAYMENT}.LOADING` },
        { result: {}, type: `${AUTHORIZED_OPTION_SETTLE_PAYMENT}.SUCCESS` },
      ];

      const actions = await store.getActions();
      expect(actions).toEqual(expected);
    });
  });
});
