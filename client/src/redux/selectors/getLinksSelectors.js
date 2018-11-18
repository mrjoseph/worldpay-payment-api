import _ from 'lodash';

const getLinksSelectors = (state) => {
  if (state) {
    return {
      resourceTree: _.get(state, 'paymentsReducer.paymentLinks.data._links.resourceTree.href'),
      authorize: _.get(state, 'paymentsReducer.paymentLinks.data._links.payments:authorize.href'),
      events: _.get(state, 'paymentsReducer.paymentLinks.data._links.payments:events.href'),
    };
  }
  return null;
};

export default getLinksSelectors;
