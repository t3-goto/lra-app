import { Reducer } from 'redux';
import {
  UPDATE_LOGIN_EMAIL,
  UPDATE_LOGIN_USERNAME,
  UPDATE_LOGIN_PASSWORD,
  UPDATE_REGISTER_EMAIL,
  UPDATE_REGISTER_USERNAME,
  UPDATE_REGISTER_PASSWORD,
  UPDATE_REGISTER_PASSWORD_CONFIRM,
  REQUEST_LOGIN,
  SUCCESS_LOGIN,
  FAILURE_LOGIN,
  REQUEST_REGISTER,
  SUCCESS_REGISTER,
  FAILURE_REGISTER,
  REQUEST_LOGOUT,
  SUCCESS_LOGOUT,
  RESET_LOGIN,
  RESET_REGISTER,
  AuthAction as Action,
} from '../actions';

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
    case REQUEST_LOGIN: {
      return {
        ...state,
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
    case REQUEST_REGISTER: {
      return {
        ...state,
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
    case REQUEST_LOGOUT: {
      return {
        ...state,
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
