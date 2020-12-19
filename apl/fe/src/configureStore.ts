import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware as router } from 'connected-react-router';
import logger from 'redux-logger';
import { History } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import { rootSaga } from './sagas';

/**
 * Configure Store.
 */
export const configureStore = (history: History) => {
  /**
   * Saga.
   */
  const saga = createSagaMiddleware();

  /**
   * Middleware.
   */
  const middlewares = [logger, saga, router(history)];

  /**
   * Store.
   */
  const store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  saga.run(rootSaga);

  return store;
};
