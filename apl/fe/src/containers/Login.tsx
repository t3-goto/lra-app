import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import {
  updateEmail,
  updateUsername,
  updatePassword,
  requestLogin,
} from '../actions';
import { RootState } from '../reducers';
import Login from '../components/Login';

/**
 * Action Interface.
 */
export interface LoginActions {
  updateEmail: (v: string) => AnyAction;
  updateUsername: (v: string) => AnyAction;
  updatePassword: (v: string) => AnyAction;
  requestLogin: () => AnyAction;
}

/**
 * Map Dispatch to Props.
 */
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    updateEmail: (v: string) => dispatch(updateEmail(v)),
    updateUsername: (v: string) => dispatch(updateUsername(v)),
    updatePassword: (v: string) => dispatch(updatePassword(v)),
    requestLogin: () => dispatch(requestLogin()),
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
