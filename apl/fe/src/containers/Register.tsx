import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  updateRegisterEmail,
  updateRegisterUsername,
  updateRegisterPassword,
  updateRegisterPasswordConfirm,
  requestRegister,
  resetRegister,
} from '../actions';
import { RootState } from '../reducers';
import Register from '../components/Register';

/**
 * Action Creater Types
 */
export type ActionCreators = {
  updateRegisterEmail: typeof updateRegisterEmail;
  updateRegisterUsername: typeof updateRegisterUsername;
  updateRegisterPassword: typeof updateRegisterPassword;
  updateRegisterPasswordConfirm: typeof updateRegisterPasswordConfirm;
  requestRegister: typeof requestRegister;
  resetRegister: typeof resetRegister;
};

/**
 * Action Type
 */
type Action = ReturnType<
  | typeof updateRegisterEmail
  | typeof updateRegisterUsername
  | typeof updateRegisterPassword
  | typeof updateRegisterPasswordConfirm
  | typeof requestRegister
  | typeof resetRegister
>;

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
export default connect(mapStateToProps, mapDispatchToProps)(Register);
