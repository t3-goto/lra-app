import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
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
 * Action Interface.
 */
export interface RegisterActions {
  updateRegisterEmail: (v: string) => AnyAction;
  updateRegisterUsername: (v: string) => AnyAction;
  updateRegisterPassword: (v: string) => AnyAction;
  updateRegisterPasswordConfirm: (v: string) => AnyAction;
  requestRegister: () => AnyAction;
  resetRegister: () => AnyAction;
}

/**
 * Map Dispatch to Props.
 */
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
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
