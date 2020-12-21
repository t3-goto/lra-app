import { Reducer } from 'redux';
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
  SUCCESS_REGISTER,
  FAILURE_REGISTER,
  SUCCESS_LOGOUT,
  RESET_LOGIN,
  RESET_REGISTER,
  updateLoginEmail,
  updateLoginUsername,
  updateLoginPassword,
  updateRegisterEmail,
  updateRegisterUsername,
  updateRegisterPassword,
  updateRegisterPasswordConfirm,
  successLogin,
  failureLogin,
  successRegister,
  failureRegister,
  successLogout,
  resetLogin,
  resetRegister,
} from '../actions';

/**
 * Action Type.
 */
type Action = ReturnType<
  | typeof updateLoginEmail
  | typeof updateLoginUsername
  | typeof updateLoginPassword
  | typeof updateRegisterEmail
  | typeof updateRegisterUsername
  | typeof updateRegisterPassword
  | typeof updateRegisterPasswordConfirm
  | typeof successLogin
  | typeof failureLogin
  | typeof successRegister
  | typeof failureRegister
  | typeof successLogout
  | typeof resetLogin
  | typeof resetRegister
>;

/**
 * IState Login Info.
 */
interface LoginInfo {
  errorInfo: string;
  email: string;
  username: string;
  password: string;
}

/**
 * IState Register Info.
 */
interface RegisterInfo {
  errorInfo: string;
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

/**
 * IState Auth State.
 */
export interface AuthState {
  isLogin: boolean;
  accessToken: string;
  loginInfo: LoginInfo;
  registerInfo: RegisterInfo;
}

/**
 * Initial State Login Info.
 */
const initialLoginInfo: LoginInfo = {
  errorInfo: '',
  email: '',
  username: '',
  password: '',
};

/**
 * Initial State Register Info.
 */
const initialRegisterInfo: RegisterInfo = {
  errorInfo: '',
  email: '',
  username: '',
  password: '',
  passwordConfirm: '',
};

/**
 * Initial State Auth State.
 */
const initialState: AuthState = {
  isLogin: false,
  accessToken: '',
  loginInfo: initialLoginInfo,
  registerInfo: initialRegisterInfo,
};

/**
 * Auth Reducer.
 */
export const authReducer: Reducer<AuthState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_LOGIN_EMAIL: {
      return {
        ...state,
        loginInfo: { ...state.loginInfo, email: action.payload },
      };
    }
    case UPDATE_LOGIN_USERNAME: {
      return {
        ...state,
        loginInfo: { ...state.loginInfo, username: action.payload },
      };
    }
    case UPDATE_LOGIN_PASSWORD: {
      return {
        ...state,
        loginInfo: { ...state.loginInfo, password: action.payload },
      };
    }
    case UPDATE_REGISTER_EMAIL: {
      return {
        ...state,
        registerInfo: { ...state.registerInfo, email: action.payload },
      };
    }
    case UPDATE_REGISTER_USERNAME: {
      return {
        ...state,
        registerInfo: { ...state.registerInfo, username: action.payload },
      };
    }
    case UPDATE_REGISTER_PASSWORD: {
      return {
        ...state,
        registerInfo: { ...state.registerInfo, password: action.payload },
      };
    }
    case UPDATE_REGISTER_PASSWORD_CONFIRM: {
      return {
        ...state,
        registerInfo: {
          ...state.registerInfo,
          passwordConfirm: action.payload,
        },
      };
    }
    case SUCCESS_LOGIN: {
      return {
        ...state,
        accessToken: action.payload,
        isLogin: true,
        loginInfo: { ...state.loginInfo, errorInfo: '' },
      };
    }
    case FAILURE_LOGIN: {
      return {
        ...state,
        isLogin: false,
        loginInfo: { ...state.loginInfo, errorInfo: action.payload },
      };
    }
    case SUCCESS_REGISTER: {
      return {
        ...state,
        registerInfo: { ...state.registerInfo, errorInfo: '' },
      };
    }
    case FAILURE_REGISTER: {
      return {
        ...state,
        registerInfo: { ...state.registerInfo, errorInfo: action.payload },
      };
    }
    case RESET_LOGIN: {
      return {
        ...state,
        loginInfo: { ...initialLoginInfo },
      };
    }
    case RESET_REGISTER: {
      return {
        ...state,
        registerInfo: { ...initialRegisterInfo },
      };
    }
    case SUCCESS_LOGOUT: {
      return { ...state, ...initialState };
    }
    default: {
      const _: never = action;
      return state;
    }
  }
};
