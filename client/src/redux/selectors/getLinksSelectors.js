import _ from 'lodash';

export const getLinksSelectors = (state) => {
  if (state.paymentsReducer) {
    return {
      resourceTree: _.get(state, 'paymentsReducer.paymentLinks.data._links.resourceTree.href'),
      authorize: _.get(state, 'paymentsReducer.paymentLinks.data._links.payments:authorize.href'),
      events: _.get(state, 'paymentsReducer.paymentLinks.data._links.payments:events.href'),
    };
  }
  return null;
};

export const getSettledSelectors = (state) => {
  if (state.settled) {
    return {
      refund: _.get(state, 'settled.authorized._links.payments:refund.href'),
    };
  }
  return null;
};

export const getAuthorizedSelectors = (state) => {
  if(state.authorized) {
    return {
      settle: _.get(state, 'authorized.authorized._links.payments:settle.href'),
    }
  }
};
