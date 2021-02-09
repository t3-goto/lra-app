import { call, put, take, select } from 'redux-saga/effects';
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
  updateLoginUsername,
} from '../actions';
import {
  createAuthHttpClient,
  createUsersHttpClient,
  PostAuthApiRequestSchema,
  PostAuthApiResponseSchema,
  PostUsersApiRequestSchema,
  PostUsersApiResponseSchema,
} from '../services/http-cliient';
import { RootState } from '../reducers';
import { config } from '../config';
/**
 * Handle The Action Type of REQUEST_LOGIN.
 */
export function* handleRequestLogin() {
  while (true) {
    yield take(REQUEST_LOGIN);
    const {
      username,
      password,
    } = ((yield select()) as RootState).auth.loginInfo;
    const postAuthApiRequestSchema: PostAuthApiRequestSchema = {
      username,
      password,
    };
    type returnType = {
      payload: PostAuthApiResponseSchema;
      error: any;
    };
    const authHttpClient = createAuthHttpClient(config.BFF_BASE_URL);
    const { payload, error }: returnType = yield call(
      authHttpClient.post,
      postAuthApiRequestSchema
    );
    if (!payload && error) {
      yield put(failureLogin(error.message));
      continue;
    }
    yield put(successLogin(payload.accessToken));
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
    const {
      username,
      password,
    } = ((yield select()) as RootState).auth.registerInfo;
    const postUsersApiRequestSchema: PostUsersApiRequestSchema = {
      username,
      password,
    };
    type returnType = {
      payload: PostUsersApiResponseSchema;
      error: any;
    };
    const usersHttpClient = createUsersHttpClient(config.BFF_BASE_URL);
    const { payload, error }: returnType = yield call(
      usersHttpClient.post,
      postUsersApiRequestSchema
    );

    if (!payload && error) {
      yield put(failureRegister(error.message));
      continue;
    }
    yield put(successRegister());
    yield put(resetRegister());
    yield put(updateLoginUsername(payload.username));
  }
}

/**
 * Handle The Action Type of SUCCESS_REGISTER.
 */
export function* handleSuccessRegister() {
  while (true) {
    yield take(SUCCESS_REGISTER);
    yield put(push('/login'));
  }
}
