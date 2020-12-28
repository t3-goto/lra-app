import {
  all,
  fork,
  call,
  put,
  takeEvery,
  take,
  select,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  REQUEST_GEOLOCATION,
  FINISH_GEOLOCATION,
  successGeolocation,
  failureGeolocation,
  finishGeolocation,
} from '../actions';
import { getCurrentPosition } from '../services/geolocation';

/**
 * Handle The Action Type of REQUEST_GEOLOCATION.
 */
export function* handleRequestGeolocation() {
  while (true) {
    yield take(REQUEST_GEOLOCATION);
    const { payload, error } = yield call(getCurrentPosition);
    console.log(payload, error);
    if (!payload && error) {
      yield put(failureGeolocation(error.message));
    } else {
      yield put(successGeolocation(payload));
    }
    yield put(finishGeolocation());
  }
}

/**
 * Handle The Action Type of FINISH_GEOLOCATION.
 */
export function* handleFinishGeolocation() {
  while (true) {
    yield take(FINISH_GEOLOCATION);
    yield put(push('/login'));
  }
}
