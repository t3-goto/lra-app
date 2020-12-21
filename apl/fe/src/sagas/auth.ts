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
  REQUEST_REGISTER,
  SUCCESS_REGISTER,
  successLogin,
  failureLogin,
  successLogout,
  successRegister,
  failureRegister,
  resetRegister,
  updateLoginEmail,
  updateLoginUsername,
} from '../actions';
import { apiAuthLogin } from '../services/api/auth';
import { apiUsers } from '../services/api/users';
import { RootState } from '../reducers';

/**
 * Handle The Action Type of REQUEST_LOGIN.
 */
export function* handleRequestLogin() {
  while (true) {
    yield take(REQUEST_LOGIN);
    const state: RootState = yield select();
    const data = {
      username: state.auth.loginInfo.username,
      password: state.auth.loginInfo.password,
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

/**
 * Handle The Action Type of REQUEST_REGISTER.
 */
export function* handleRequestRegister() {
  while (true) {
    yield take(REQUEST_REGISTER);
    const state: RootState = yield select();
    const data = {
      username: state.auth.registerInfo.username,
      password: state.auth.registerInfo.password,
    };
    const { payload, error } = yield call(apiUsers.post, data);
    if (!payload && error) {
      yield put(failureRegister(error.message));
      continue;
    }
    yield put(successRegister());
    yield put(resetRegister());
    yield put(updateLoginUsername(data.username));
  }
}

/**
 * Handle The Action Type of SUCCESS_REGISTER.
 */
export function* handleSuccessRegister() {
  while (true) {
    yield take(SUCCESS_REGISTER);
    yield put(push('/'));
  }
}
