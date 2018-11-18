import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import createApiMiddleware from '../../createApiMiddleware';
import api from '../../api';
import {
  settlePayment,
  fetchData,
  cancelPayment,
  queryPayment,
  partialSettlePayment,
  AUTHORIZED_OPTION_SETTLE_PAYMENT,
  CANCEL_PAYMENT,
  PARTIAL_AUTHORIZED_OPTION_SETTLE_PAYMENT,
  QUERY_PAYMENT
} from './authorizedOptionAction';

const middlewares = [thunk, createApiMiddleware(api)];
const mockStore = configureMockStore(middlewares);

const store = mockStore({});

describe('Authorized Option Actions', () => {
  const payload = {};
  const response = {};
  describe('settle payment', () => {
    let path;
    beforeEach(() => {
      path = 'http://localhost:2000/api/payments/settlements/full/eyJrIjoiazNhYjYzMiJ9';
    });

    afterEach(() => {
      store.clearActions();
      fetchMock.reset();
      fetchMock.restore();
    });
    describe("When calling the AUTHORIZED_OPTION_SETTLE_PAYMENT action and everything is all good", () => {
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

      describe("When calling the AUTHORIZED_OPTION_SETTLED_PAYMENT action and you're having a bad day", () => {
        it('should return action type AUTHORIZED_OPTION_SETTLE_PAYMENT (LOADING AND FAILED)', async () => {
          fetchMock.post(path, { status: 404, body: response });
          settlePayment(path, payload, AUTHORIZED_OPTION_SETTLE_PAYMENT);
          await store.dispatch(fetchData(path, payload, AUTHORIZED_OPTION_SETTLE_PAYMENT));
          const expected = [
            { type: `${AUTHORIZED_OPTION_SETTLE_PAYMENT}.LOADING` },
            { error: {}, type: `${AUTHORIZED_OPTION_SETTLE_PAYMENT}.FAILED` },
          ];

          const actions = await store.getActions();
          expect(actions).toEqual(expected);
        });
      });
    });
  });
  describe('cancel payment', () => {
    let path;
    beforeEach(() => {
      path = 'http://localhost:2000/api/payments/settlements/full/eyJrIjoiazNhYjYzMiJ9';
    });

    afterEach(() => {
      store.clearActions();
      fetchMock.reset();
      fetchMock.restore();
    });
    describe("When calling the CANCEL_PAYMENT action and everything is all good", () => {
      it('should return action type CANCEL_PAYMENT (LOADING AND SUCCESS)', async () => {
        fetchMock.post(path, { status: 201, body: response });
        cancelPayment(path, payload, CANCEL_PAYMENT);
        await store.dispatch(fetchData(path, payload, CANCEL_PAYMENT));
        const expected = [
          { type: `${CANCEL_PAYMENT}.LOADING` },
          { result: {}, type: `${CANCEL_PAYMENT}.SUCCESS` },
        ];

        const actions = await store.getActions();
        expect(actions).toEqual(expected);
      });

      describe("When calling the CANCEL_PAYMENT action and you're having a bad day", () => {
        it('should return action type CANCEL_PAYMENT (LOADING AND FAILED)', async () => {
          fetchMock.post(path, { status: 404, body: response });
          cancelPayment(path, payload, CANCEL_PAYMENT);
          await store.dispatch(fetchData(path, payload, CANCEL_PAYMENT));
          const expected = [
            { type: `${CANCEL_PAYMENT}.LOADING` },
            { error: {}, type: `${CANCEL_PAYMENT}.FAILED` },
          ];

          const actions = await store.getActions();
          expect(actions).toEqual(expected);
        });
      });
    });
  });
  describe('partial settle payment', () => {
    let path;
    beforeEach(() => {
      path = 'http://localhost:2000/api/payments/settlements/partials/eyJrIjoiazNhYjYzMiJ9';
    });

    afterEach(() => {
      store.clearActions();
      fetchMock.reset();
      fetchMock.restore();
    });
    describe("When calling the QUERY_PAYMENT action and everything is all good", () => {
      it('should return action type QUERY_PAYMENT (LOADING AND SUCCESS)', async () => {
        fetchMock.post(path, { status: 201, body: response });
        partialSettlePayment(path, payload);
        await store.dispatch(fetchData(path, payload, PARTIAL_AUTHORIZED_OPTION_SETTLE_PAYMENT));
        const expected = [
          { type: `${PARTIAL_AUTHORIZED_OPTION_SETTLE_PAYMENT}.LOADING` },
          { result: {}, type: `${PARTIAL_AUTHORIZED_OPTION_SETTLE_PAYMENT}.SUCCESS` },
        ];

        const actions = await store.getActions();
        expect(actions).toEqual(expected);
      });

      describe("When calling the PARTIAL_AUTHORIZED_OPTION_SETTLE_PAYMENT action and you're having a bad day", () => {
        it('should return action type PARTIAL_AUTHORIZED_OPTION_SETTLE_PAYMENT (LOADING AND FAILED)', async () => {
          fetchMock.post(path, { status: 404, body: response });
          partialSettlePayment(path, payload);
          await store.dispatch(fetchData(path, payload, PARTIAL_AUTHORIZED_OPTION_SETTLE_PAYMENT));
          const expected = [
            { type: `${PARTIAL_AUTHORIZED_OPTION_SETTLE_PAYMENT}.LOADING` },
            { error: {}, type: `${PARTIAL_AUTHORIZED_OPTION_SETTLE_PAYMENT}.FAILED` },
          ];

          const actions = await store.getActions();
          expect(actions).toEqual(expected);
        });
      });
    });
  });
  describe('query payment', () => {
    let path;
    beforeEach(() => {
      path = 'http://localhost:2000/api/payments/events/eyJrIjoiazNhYjYzMiJ9';
    });

    afterEach(() => {
      store.clearActions();
      fetchMock.reset();
      fetchMock.restore();
    });
    describe("When calling the QUERY_PAYMENT action and everything is all good", () => {
      it('should return action type QUERY_PAYMENT (LOADING AND SUCCESS)', async () => {
        fetchMock.post(path, { status: 201, body: response });
        queryPayment(path, payload, QUERY_PAYMENT);
        await store.dispatch(fetchData(path, payload, QUERY_PAYMENT));
        const expected = [
          { type: `${QUERY_PAYMENT}.LOADING` },
          { result: {}, type: `${QUERY_PAYMENT}.SUCCESS` },
        ];

        const actions = await store.getActions();
        expect(actions).toEqual(expected);
      });

      describe("When calling the AUTHORIZED_OPTION_SETTLED_PAYMENT action and you're having a bad day", () => {
        it('should return action type AUTHORIZED_OPTION_SETTLE_PAYMENT (LOADING AND FAILED)', async () => {
          fetchMock.post(path, { status: 404, body: response });
          queryPayment(path, payload, QUERY_PAYMENT);
          await store.dispatch(fetchData(path, payload, QUERY_PAYMENT));
          const expected = [
            { type: `${QUERY_PAYMENT}.LOADING` },
            { error: {}, type: `${QUERY_PAYMENT}.FAILED` },
          ];

          const actions = await store.getActions();
          expect(actions).toEqual(expected);
        });
      });
    });
  });
});
