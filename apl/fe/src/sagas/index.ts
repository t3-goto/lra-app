import { fork } from 'redux-saga/effects';
import { handleRequestLogin, handleSuccessLogin } from './auth';

/**
 * Root Saga.
 */
export function* rootSaga() {
  yield fork(handleRequestLogin);
  yield fork(handleSuccessLogin);
}
