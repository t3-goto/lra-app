import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';

/**
 * history.
 */
export const history = createBrowserHistory();

/**
 * store.
 */
export const configureStore = () => {
  return createStore(
    createRootReducer(history),
    applyMiddleware(logger, thunk, routerMiddleware(history))
  );
};
