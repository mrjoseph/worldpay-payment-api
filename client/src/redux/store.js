/* eslint-disable */
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createApiMiddleware from './createApiMiddleware';
import api from './api';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import createHistory from "history/createBrowserHistory";
import rootReducer from './reducers';

export const history = (typeof window !== 'undefined') && createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
    createApiMiddleware(api),
    thunk,
  routerMiddleware(history)
];
// if (process.env.NODE_ENV === 'development') {
  let devToolsExtension;
  if (typeof window !== 'undefined') {
    devToolsExtension = window.devToolsExtension;
  }

  if (typeof devToolsExtension === 'function') {
   enhancers.push(devToolsExtension())
  }
// }

const logger = createLogger();
if (process.env.NODE_ENV === 'development') middleware.push(logger); // comment this out so i can get loggin in prod
middleware.push(logger);
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);


export default store;
