import { fork } from 'redux-saga/effects';
import {
  handleRequestLogin,
  handleRequestRegister,
  handleSuccessLogin,
  handleSuccessRegister,
} from './auth';

/**
 * Root Saga.
 */
export function* rootSaga() {
  yield fork(handleRequestLogin);
  yield fork(handleSuccessLogin);
  yield fork(handleRequestRegister);
  yield fork(handleSuccessRegister);
}
