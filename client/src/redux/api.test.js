import fetchMock from 'fetch-mock';
import api from './api';

describe('Api', () => {
  const baseUrl = 'http://localhost:2000';
  afterEach(() => {
    fetchMock.restore();
  });

  describe('When making a succcessful fetch ', () => {
    const apiPath = '/api';
    const fullUrl = `${baseUrl}${apiPath}/payment`;
    it('should make a successful fetch', async () => {
      const status = 201;
      const response = { foo: 'bar' };
      fetchMock.post(fullUrl, { status, body: response });
      const result = await api(fullUrl, { method: 'POST' });
      expect(result).toEqual({ foo: 'bar' });
    });

    it('should make a successful fetch', async () => {
      const status = 201;
      const response = { error: 'Something went wrong' };
      fetchMock.post(fullUrl, { status, body: response });
      const result = await api(fullUrl, { method: 'POST' });
      expect(result).toEqual(response);
    });

  });
});
