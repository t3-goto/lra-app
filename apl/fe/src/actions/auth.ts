/**
 * Action Types.
 */
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const FAILURE_LOGIN = 'FAILURE_LOGIN';
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const SUCCESS_LOGOUT = 'SUCCESS_LOGOUT';

/**
 * Action Creators.
 */
export const updateEmail = (payload: string) => {
  return {
    type: UPDATE_EMAIL as typeof UPDATE_EMAIL,
    payload,
  };
};

// Update Email.
export const updateUsername = (payload: string) => {
  return {
    type: UPDATE_USERNAME as typeof UPDATE_USERNAME,
    payload,
  };
};

// Update Password.
export const updatePassword = (payload: string) => {
  return {
    type: UPDATE_PASSWORD as typeof UPDATE_PASSWORD,
    payload,
  };
};

// Request Login.
export const requestLogin = () => {
  return {
    type: REQUEST_LOGIN as typeof REQUEST_LOGIN,
  };
};

// Success Login.
export const successLogin = (payload: string) => {
  return {
    type: SUCCESS_LOGIN as typeof SUCCESS_LOGIN,
    payload,
  };
};

// Failure Login.
export const failureLogin = (payload: string) => {
  return {
    type: FAILURE_LOGIN as typeof FAILURE_LOGIN,
    payload,
  };
};

// Request Logout.
export const requestLogout = () => {
  return {
    type: REQUEST_LOGOUT as typeof REQUEST_LOGOUT,
  };
};

// Success Logout.
export const successLogout = () => {
  return {
    type: SUCCESS_LOGOUT as typeof SUCCESS_LOGOUT,
  };
};
