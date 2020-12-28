import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  updateLoginEmail,
  updateLoginUsername,
  updateLoginPassword,
  requestLogin,
  resetLogin,
  AuthAction as Action,
} from '../actions';
import { RootState } from '../reducers';
import Component from '../components/Login';

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
export default connect(mapStateToProps, mapDispatchToProps)(Component);
