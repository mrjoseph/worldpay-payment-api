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
      refund: _.get(state, 'settled._links.payments:refund.href'),
    };
  }
  return null;
};

export const getAuthorizedSelectors = (state) => {
  if (state) {
    return {
      settle: _.get(state, 'authorized._links.payments:settle.href'),
      cancel: _.get(state, 'authorized._links.payments:cancel.href'),
      partialSettle: _.get(state, 'authorized._links.payments:partialSettle.href'),
      events: _.get(state, 'authorized._links.payments:events.href'),
    };
  }
};

export const getCancelledSelector = (state) => {
  if (state) {
    return {
      cancelledLink: _.get(state, 'cancelled._links.payments:events.href'),
    };
  }
};

export const getPartialSettleSelectors = (state) => {
  if (state) {
    return {
      partialRefund: _.get(state, 'partialSettle._links.payments:partialRefund.href'),
      refund: _.get(state, 'partialSettle._links.payments:refund.href'),
      events: _.get(state, 'partialSettle._links.payments:events.href'),
    };
  }
};
