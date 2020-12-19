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
  REQUEST_LOGIN,
  SUCCESS_LOGIN,
  REQUEST_LOGOUT,
  successLogin,
  failureLogin,
  successLogout,
} from '../actions';
import { apiAuthLogin } from '../services/api/auth';
import { RootState } from '../reducers';

/**
 * Handle The Action Type of REQUEST_LOGIN.
 */
export function* handleRequestLogin() {
  while (true) {
    const action = yield take(REQUEST_LOGIN);
    const state: RootState = yield select();
    const data = {
      username: state.auth.username,
      password: state.auth.password,
    };
    const { payload, error } = yield call(apiAuthLogin.post, data);
    if (!payload && error) {
      yield put(failureLogin(error.message));
      continue;
    }
    yield put(successLogin(payload.data.access_token));
    yield take(REQUEST_LOGOUT);
    yield put(successLogout());
  }
}

/**
 * Handle The Action Type of SUCCESS_LOGIN.
 */
export function* handleSuccessLogin() {
  while (true) {
    yield take(SUCCESS_LOGIN);
    yield put(push('/search'));
  }
}
