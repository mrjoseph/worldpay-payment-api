import { AUTHORIZED_OPTION_SETTLE_PAYMENT } from '../../actions/authorizedOptionAction/authorizedOptionAction';

const INITIAL_STATE = {};

export default function settlePaymentReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case `${AUTHORIZED_OPTION_SETTLE_PAYMENT}.FAILED`:
      return {
        ...state,
        authorized: action.error,
      };
    case `${AUTHORIZED_OPTION_SETTLE_PAYMENT}.SUCCESS`:
      return {
        ...state,
        authorized: action.result,
      };
    default:
      return state;
  }
}
