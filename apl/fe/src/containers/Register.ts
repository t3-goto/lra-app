import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  updateRegisterEmail,
  updateRegisterUsername,
  updateRegisterPassword,
  updateRegisterPasswordConfirm,
  requestRegister,
  resetRegister,
  AuthAction as Action,
} from '../actions';
import { RootState } from '../reducers';
import Component from '../components/Register';

/**
 * Map Dispatch to Props.
 */
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    updateRegisterEmail: (v: string) => dispatch(updateRegisterEmail(v)),
    updateRegisterUsername: (v: string) => dispatch(updateRegisterUsername(v)),
    updateRegisterPassword: (v: string) => dispatch(updateRegisterPassword(v)),
    updateRegisterPasswordConfirm: (v: string) =>
      dispatch(updateRegisterPasswordConfirm(v)),
    requestRegister: () => dispatch(requestRegister()),
    resetRegister: () => dispatch(resetRegister()),
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
