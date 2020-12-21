import {
  UPDATE_LOGIN_EMAIL,
  UPDATE_LOGIN_USERNAME,
  UPDATE_LOGIN_PASSWORD,
  UPDATE_REGISTER_EMAIL,
  UPDATE_REGISTER_USERNAME,
  UPDATE_REGISTER_PASSWORD,
  UPDATE_REGISTER_PASSWORD_CONFIRM,
  SUCCESS_LOGIN,
  FAILURE_LOGIN,
  SUCCESS_LOGOUT,
  SUCCESS_REGISTER,
  FAILURE_REGISTER,
  RESET_LOGIN,
  RESET_REGISTER,
} from '../actions';

/**
 * IState
 */
interface LoginInfo {
  errorInfo: string;
  email: string;
  username: string;
  password: string;
}

interface RegisterInfo {
  errorInfo: string;
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

export interface AuthState {
  isLogin: boolean;
  accessToken: string;
  loginInfo: LoginInfo;
  registerInfo: RegisterInfo;
}

/**
 * Initial State.
 */
const initialLoginInfo: LoginInfo = {
  errorInfo: '',
  email: '',
  username: '',
  password: '',
};

const initialRegisterInfo: RegisterInfo = {
  errorInfo: '',
  email: '',
  username: '',
  password: '',
  passwordConfirm: '',
};

const initialState: AuthState = {
  isLogin: false,
  accessToken: '',
  loginInfo: initialLoginInfo,
  registerInfo: initialRegisterInfo,
};

/**
 * Auth Reducer.
 */
export const authReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case UPDATE_LOGIN_EMAIL:
      return {
        ...state,
        loginInfo: { ...state.loginInfo, email: action.payload },
      };
    case UPDATE_LOGIN_USERNAME:
      return {
        ...state,
        loginInfo: { ...state.loginInfo, username: action.payload },
      };
    case UPDATE_LOGIN_PASSWORD:
      return {
        ...state,
        loginInfo: { ...state.loginInfo, password: action.payload },
      };
    case UPDATE_REGISTER_EMAIL:
      return {
        ...state,
        registerInfo: { ...state.registerInfo, email: action.payload },
      };
    case UPDATE_REGISTER_USERNAME:
      return {
        ...state,
        registerInfo: { ...state.registerInfo, username: action.payload },
      };
    case UPDATE_REGISTER_PASSWORD:
      return {
        ...state,
        registerInfo: { ...state.registerInfo, password: action.payload },
      };
    case UPDATE_REGISTER_PASSWORD_CONFIRM:
      return {
        ...state,
        registerInfo: {
          ...state.registerInfo,
          passwordConfirm: action.payload,
        },
      };
    case SUCCESS_LOGIN:
      return {
        ...state,
        accessToken: action.payload,
        isLogin: true,
        loginInfo: { ...state.loginInfo, errorInfo: '' },
      };
    case FAILURE_LOGIN:
      return {
        ...state,
        isLogin: false,
        loginInfo: { ...state.loginInfo, errorInfo: action.payload },
      };
    case SUCCESS_REGISTER:
      return {
        ...state,
        registerInfo: { ...state.registerInfo, errorInfo: '' },
      };
    case FAILURE_REGISTER:
      return {
        ...state,
        registerInfo: { ...state.registerInfo, errorInfo: action.payload },
      };
    case RESET_LOGIN:
      return {
        ...state,
        loginInfo: { ...initialLoginInfo },
      };
    case RESET_REGISTER:
      return {
        ...state,
        registerInfo: { ...initialRegisterInfo },
      };
    case SUCCESS_LOGOUT:
      return { ...state, ...initialState };
    default:
      return state;
  }
};
