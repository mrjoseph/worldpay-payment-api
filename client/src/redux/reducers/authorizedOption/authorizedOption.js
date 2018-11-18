import { SETTLE_PAYMENT } from '../../actions/authorizedOptionAction/authorizedOptionAction';


const INITIAL_STATE = {};

export default function settlePaymentReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case `${SETTLE_PAYMENT}.FAILED`:
      return {
        ...state,
        authorized: action.error,
      };
    case `${SETTLE_PAYMENT}.SUCCESS`:
      return {
        ...state,
        authorized: action.result,
      };
    default:
      return state;
  }
}
