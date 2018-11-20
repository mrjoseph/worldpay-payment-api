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
  const data = fetch(path, options) // eslint-disable-line no-undef
    .then(response => response.json()
      .then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return Promise.resolve(json);
      }));
  return data;
}

export default api;
