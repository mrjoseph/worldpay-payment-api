export default function createApiMiddleware(client) {
  return ({ dispatch, getState }) => (
    next => (action) => {
      // redux thunk
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }
      const {
        request, types, type, ...rest
      } = action;
      if (!request) {
        return next(action);
      }

      let loading;
      let success;
      let failed;

      if (types) {
        ({ loading, success, failed } = types);
      } else if (type) {
        loading = `${type}.LOADING`;
        success = `${type}.SUCCESS`;
        failed = `${type}.FAILED`;
      }

      next({ ...rest, type: loading });

      return request(client).then(
        result => next({ ...rest, result, type: success }),
        error => next({ ...rest, error, type: failed }),
      );
    });
}
