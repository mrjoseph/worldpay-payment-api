import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import paymentsReducer from './payments/paymentsReducer';

const routeReducer = combineReducers({
  router: routerReducer,
  paymentsReducer,

});

export default routeReducer;
