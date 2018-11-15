import { GET_PAYMENT_LINKS } from '../../actions/getPaymentLinks/getPaymentLinksAction';


const INITIAL_STATE = {};

export default function paymentsReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case `${GET_PAYMENT_LINKS}.FAILED`:
      return {
        ...state,
        paymentLinks: action.error,
      };
    case `${GET_PAYMENT_LINKS}.SUCCESS`:
      return {
        ...state,
        paymentLinks: action.result,
      };
    default:
      return state;
  }
}
