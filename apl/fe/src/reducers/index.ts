import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { authReducer, AuthState } from './auth';

/**
 * Root State.
 */
export type RootState = {
  router: RouterState;
  auth: AuthState;
};

/**
 * Root Reducer.
 */
export const rootReducer = (history: History<unknown>) =>
  combineReducers<RootState>({
    router: connectRouter(history),
    auth: authReducer,
  });
