import {
  UPDATE_EMAIL,
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
  SUCCESS_LOGIN,
  FAILURE_LOGIN,
  SUCCESS_LOGOUT,
} from '../actions';

/**
 * IState
 */
export interface AuthState {
  isLogin: boolean;
  accessToken: string;
  errorInfo: string;
  email: string;
  username: string;
  password: string;
}

/**
 * Initial State.
 */
const initialState: AuthState = {
  isLogin: false,
  accessToken: '',
  errorInfo: '',
  email: '',
  username: '',
  password: '',
};

/**
 * Auth Reducer.
 */
export const authReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case UPDATE_USERNAME:
      return { ...state, username: action.payload };
    case UPDATE_PASSWORD:
      return { ...state, password: action.payload };
    case SUCCESS_LOGIN:
      return {
        ...state,
        accessToken: action.payload,
        isLogin: true,
        errorInfo: '',
      };
    case FAILURE_LOGIN:
      return { ...state, errorInfo: action.payload, isLogin: false };
    case SUCCESS_LOGOUT:
      return { ...state, ...initialState };
    default:
      return state;
  }
};
