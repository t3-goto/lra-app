import { fork } from 'redux-saga/effects';
import {
  handleRequestLogin,
  handleRequestRegister,
  handleSuccessLogin,
  handleSuccessRegister,
} from './auth';
import {
  handleRequestGeolocation,
  handleFinishGeolocation,
} from './geolocation';
import { handleRequestRestaurant } from './restaurant';

/**
 * Root Saga.
 */
export function* rootSaga() {
  yield fork(handleRequestLogin);
  yield fork(handleSuccessLogin);
  yield fork(handleRequestRegister);
  yield fork(handleSuccessRegister);
  yield fork(handleRequestGeolocation);
  yield fork(handleFinishGeolocation);
  yield fork(handleRequestRestaurant);
}
