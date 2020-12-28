/**
 * Action Type Constants.
 */
export const UPDATE_LOGIN_EMAIL = 'UPDATE_LOGIN_EMAIL';
export const UPDATE_LOGIN_USERNAME = 'UPDATE_LOGIN_USERNAME';
export const UPDATE_LOGIN_PASSWORD = 'UPDATE_LOGIN_PASSWORD';
export const UPDATE_REGISTER_EMAIL = 'UPDATE_REGISTER_EMAIL';
export const UPDATE_REGISTER_USERNAME = 'UPDATE_REGISTER_USERNAME';
export const UPDATE_REGISTER_PASSWORD = 'UPDATE_REGISTER_PASSWORD';
export const UPDATE_REGISTER_PASSWORD_CONFIRM =
  'UPDATE_REGISTER_PASSWORD_CONFIRM';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const FAILURE_LOGIN = 'FAILURE_LOGIN';
export const REQUEST_REGISTER = 'REQUEST_REGISTER';
export const SUCCESS_REGISTER = 'SUCCESS_REGISTER';
export const FAILURE_REGISTER = 'FAILURE_REGISTER';
export const RESET_LOGIN = 'RESET_LOGIN';
export const RESET_REGISTER = 'RESET_REGISTER';
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const SUCCESS_LOGOUT = 'SUCCESS_LOGOUT';

/**
 * Action Creators: Update Login Email.
 */
export const updateLoginEmail = (payload: string) => {
  return {
    type: UPDATE_LOGIN_EMAIL as typeof UPDATE_LOGIN_EMAIL,
    payload,
  };
};

/**
 * Action Creators: Update Login Username.
 */
export const updateLoginUsername = (payload: string) => {
  return {
    type: UPDATE_LOGIN_USERNAME as typeof UPDATE_LOGIN_USERNAME,
    payload,
  };
};

/**
 * Action Creators: Update Login Password.
 */
export const updateLoginPassword = (payload: string) => {
  return {
    type: UPDATE_LOGIN_PASSWORD as typeof UPDATE_LOGIN_PASSWORD,
    payload,
  };
};

/**
 * Action Creators: Update Register Email.
 */
export const updateRegisterEmail = (payload: string) => {
  return {
    type: UPDATE_REGISTER_EMAIL as typeof UPDATE_REGISTER_EMAIL,
    payload,
  };
};

/**
 * Action Creators: Update Register Username.
 */
export const updateRegisterUsername = (payload: string) => {
  return {
    type: UPDATE_REGISTER_USERNAME as typeof UPDATE_REGISTER_USERNAME,
    payload,
  };
};

/**
 * Action Creators: Update Register Password.
 */
export const updateRegisterPassword = (payload: string) => {
  return {
    type: UPDATE_REGISTER_PASSWORD as typeof UPDATE_REGISTER_PASSWORD,
    payload,
  };
};

/**
 * Action Creators: Update Register Password Confirm.
 */
export const updateRegisterPasswordConfirm = (payload: string) => {
  return {
    type: UPDATE_REGISTER_PASSWORD_CONFIRM as typeof UPDATE_REGISTER_PASSWORD_CONFIRM,
    payload,
  };
};

/**
 * Action Creators: Request Login.
 */
export const requestLogin = () => {
  return {
    type: REQUEST_LOGIN as typeof REQUEST_LOGIN,
  };
};

/**
 * Action Creators: Success Login.
 */
export const successLogin = (payload: string) => {
  return {
    type: SUCCESS_LOGIN as typeof SUCCESS_LOGIN,
    payload,
  };
};

/**
 * Action Creators: Failure Login.
 */
export const failureLogin = (payload: string) => {
  return {
    type: FAILURE_LOGIN as typeof FAILURE_LOGIN,
    payload,
  };
};

/**
 * Action Creators: Request Register.
 */
export const requestRegister = () => {
  return {
    type: REQUEST_REGISTER as typeof REQUEST_REGISTER,
  };
};

/**
 * Action Creators: Success Register.
 */
export const successRegister = () => {
  return {
    type: SUCCESS_REGISTER as typeof SUCCESS_REGISTER,
  };
};

/**
 * Action Creators: Failure Register.
 */
export const failureRegister = (payload: string) => {
  return {
    type: FAILURE_REGISTER as typeof FAILURE_REGISTER,
    payload,
  };
};

/**
 * Action Creators: Reset Login.
 */
export const resetLogin = () => {
  return {
    type: RESET_LOGIN as typeof RESET_LOGIN,
  };
};

/**
 * Action Creators: Reset Register.
 */
export const resetRegister = () => {
  return {
    type: RESET_REGISTER as typeof RESET_REGISTER,
  };
};

/**
 * Action Creators: Request Logout.
 */
export const requestLogout = () => {
  return {
    type: REQUEST_LOGOUT as typeof REQUEST_LOGOUT,
  };
};

/**
 * Action Creators: Success Logout.
 */
export const successLogout = () => {
  return {
    type: SUCCESS_LOGOUT as typeof SUCCESS_LOGOUT,
  };
};

/**
 * Action Creater Types
 */
export type AuthActionCreators = {
  updateLoginEmail: typeof updateLoginEmail;
  updateLoginUsername: typeof updateLoginUsername;
  updateLoginPassword: typeof updateLoginPassword;
  updateRegisterEmail: typeof updateRegisterEmail;
  updateRegisterUsername: typeof updateRegisterUsername;
  updateRegisterPassword: typeof updateRegisterPassword;
  updateRegisterPasswordConfirm: typeof updateRegisterPasswordConfirm;
  requestLogin: typeof requestLogin;
  successLogin: typeof successLogin;
  failureLogin: typeof failureLogin;
  requestRegister: typeof requestRegister;
  successRegister: typeof successRegister;
  failureRegister: typeof failureRegister;
  resetLogin: typeof resetLogin;
  resetRegister: typeof resetRegister;
  requestLogout: typeof requestLogout;
  successLogout: typeof successLogout;
};

/**
 * Action Types.
 */
export type AuthAction = ReturnType<
  | typeof updateLoginEmail
  | typeof updateLoginUsername
  | typeof updateLoginPassword
  | typeof updateRegisterEmail
  | typeof updateRegisterUsername
  | typeof updateRegisterPassword
  | typeof updateRegisterPasswordConfirm
  | typeof requestLogin
  | typeof successLogin
  | typeof failureLogin
  | typeof requestRegister
  | typeof successRegister
  | typeof failureRegister
  | typeof resetLogin
  | typeof resetRegister
  | typeof requestLogout
  | typeof successLogout
>;
