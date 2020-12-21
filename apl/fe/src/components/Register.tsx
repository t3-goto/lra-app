import * as React from 'react';
import AuthTitleLabel from './AuthTitleLabel';
import NameInputText from './NameInputText';
import EmailInputText from './EmailInputText';
import PasswordInputText from './PasswordInputText';
import ConfirmPasswordInputText from './ConfirmPasswordInputText';
import RegisterButton from './RegisterButton';
import RegisterIconButtonGroup from './RegisterIconButtonGroup';
import AuthAlreadyHaveAnAccountLink from './AuthAlreadyHaveAnAccountLink';
import { RootState } from '../reducers';
import { ActionCreators } from '../containers/Register';
import '../assets/styles/Register.scss';

/**
 * Own Props.
 */
type OwnProps = {
  className?: string;
};

/**
 * TProps.
 */
type TProps = OwnProps & RootState & ActionCreators;

/**
 * Presentational Component.
 */
const Component: React.FC<TProps> = (props) => {
  return (
    <div className='register'>
      <AuthTitleLabel className='register-auth-title-label' />
      <NameInputText
        className='register-name-input-text'
        value={props.auth.registerInfo.username}
        onChange={props.updateRegisterUsername}
      />
      {/* <EmailInputText
        className='register-email-input-text'
        value={props.auth.registerInfo.email}
        onChange={props.updateRegisterEmail}
      /> */}
      <PasswordInputText
        className='register-password-input-text'
        value={props.auth.registerInfo.password}
        onChange={props.updateRegisterPassword}
      />
      <ConfirmPasswordInputText
        className='register-confirm-password-input-text'
        value={props.auth.registerInfo.passwordConfirm}
        onChange={props.updateRegisterPasswordConfirm}
      />
      <RegisterButton
        className='register-register-button'
        onClick={props.requestRegister}
      />
      <RegisterIconButtonGroup className='register-register-icon-button-group' />
      <AuthAlreadyHaveAnAccountLink
        className='register-auth-already-have-an-account-link'
        onClick={props.resetRegister}
      />
    </div>
  );
};

export default Component;
