import {
  AUTHORIZED_OPTION_SETTLE_PAYMENT,
  QUERY_PAYMENT,
  PARTIAL_AUTHORIZED_OPTION_SETTLE_PAYMENT,
  CANCEL_PAYMENT,
} from '../../actions/authorizedOptionAction/authorizedOptionAction';

const INITIAL_STATE = {};

export function settlePaymentReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case `${AUTHORIZED_OPTION_SETTLE_PAYMENT}.FAILED`:
      return {
        ...state,
        ...(action.error),
      };
    case `${AUTHORIZED_OPTION_SETTLE_PAYMENT}.SUCCESS`:
      return {
        ...state,
        ...(action.result),
      };
    default:
      return state;
  }
}

export function partialSettlePaymentReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case `${PARTIAL_AUTHORIZED_OPTION_SETTLE_PAYMENT}.FAILED`:
      return {
        ...state,
        ...(action.error),
      };
    case `${PARTIAL_AUTHORIZED_OPTION_SETTLE_PAYMENT}.SUCCESS`:
      return {
        ...state,
        ...(action.result),
      };
    default:
      return state;
  }
}

export function cancelPaymentReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case `${CANCEL_PAYMENT}.FAILED`:
      return {
        ...state,
        ...(action.error),
      };
    case `${CANCEL_PAYMENT}.SUCCESS`:
      return {
        ...state,
        ...(action.result),
      };
    default:
      return state;
  }
}

export function queryPaymentReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case `${QUERY_PAYMENT}.FAILED`:
      return {
        ...state,
        ...(action.error),
      };
    case `${QUERY_PAYMENT}.SUCCESS`:
      return {
        ...state,
        ...(action.result),
      };
    default:
      return state;
  }
}
