import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
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
 * Action Interface.
 */
export interface LoginActions {
  updateLoginEmail: (v: string) => AnyAction;
  updateLoginUsername: (v: string) => AnyAction;
  updateLoginPassword: (v: string) => AnyAction;
  requestLogin: () => AnyAction;
  resetLogin: () => AnyAction;
}

/**
 * Map Dispatch to Props.
 */
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
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
