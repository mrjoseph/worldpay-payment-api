import { AUTHORIZE_PAYMENT } from '../../actions/postAuthorizePayment/postAuthorizePayment';


const INITIAL_STATE = {};

export default function authorizePaymentReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case `${AUTHORIZE_PAYMENT}.FAILED`:
      return {
        ...state,
        authorized: action.error,
      };
    case `${AUTHORIZE_PAYMENT}.SUCCESS`:
      return {
        ...state,
        authorized: action.result,
      };
    default:
      return state;
  }
}
