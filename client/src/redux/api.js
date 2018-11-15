require('es6-promise').polyfill();
require('isomorphic-fetch');

function api(path, params) {
  const {
    method,
    body,
    headers,
    credentials,
  } = params;
  const options = {
    method,
    headers,
    credentials,
  };
  if (body) options.body = body;

  return fetch(path, options) // eslint-disable-line no-undef
    .then((response) => {
      // if (response.status === 201 || response.status === 204 || response.status === 205) {
      //   return Promise.resolve();
      // }
      return response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return Promise.resolve(json);
      });
    });
}

export default api;
