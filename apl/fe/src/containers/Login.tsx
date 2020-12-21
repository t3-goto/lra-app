import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  updateLoginEmail,
  updateLoginUsername,
  updateLoginPassword,
  requestLogin,
  resetLogin,
} from '../actions';
import { RootState } from '../reducers';
import Login from '../components/Login';

/**
 * Action Creater Types
 */
export type ActionCreators = {
  updateLoginEmail: typeof updateLoginEmail;
  updateLoginUsername: typeof updateLoginUsername;
  updateLoginPassword: typeof updateLoginPassword;
  requestLogin: typeof requestLogin;
  resetLogin: typeof resetLogin;
};

/**
 * Action Type
 */
type Action = ReturnType<
  | typeof updateLoginEmail
  | typeof updateLoginUsername
  | typeof updateLoginPassword
  | typeof requestLogin
  | typeof resetLogin
>;

/**
 * Map Dispatch to Props.
 */
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    updateLoginEmail: (v: string) => dispatch(updateLoginEmail(v)),
    updateLoginUsername: (v: string) => dispatch(updateLoginUsername(v)),
    updateLoginPassword: (v: string) => dispatch(updateLoginPassword(v)),
    requestLogin: () => dispatch(requestLogin()),
    resetLogin: () => dispatch(resetLogin()),
  };
};

/**
 * Map State to Props.
 */
function mapStateToProps(rootState: RootState) {
  return { ...rootState };
}

/**
 * Connect Presentational Component.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Login);
