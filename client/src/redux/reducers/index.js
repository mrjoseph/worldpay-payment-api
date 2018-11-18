import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import paymentsReducer from './payments/paymentsReducer';
import authorizePaymentReducer from './authorizePayments/authorizePayments';
import settlePaymentReducer from './authorizedOption/authorizedOption';

const routeReducer = combineReducers({
  router: routerReducer,
  paymentsReducer,
  authorized: authorizePaymentReducer,
  settled: settlePaymentReducer,

});

export default routeReducer;
