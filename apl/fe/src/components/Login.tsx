import * as React from 'react';
import AuthTitleLabel from './AuthTitleLabel';
import EmailInputText from './EmailInputText';
import NameInputText from './NameInputText';
import PasswordInputText from './PasswordInputText';
import AuthForgotPasswordLink from './AuthForgotPasswordLink';
import LoginButton from './LoginButton';
import LoginIconButtonGroup from './LoginIconButtonGroup';
import AuthCreateNewAccountLink from './AuthCreateNewAccountLink';
import AuthSkipLoginLink from './AuthSkipLoginLink';
import { RootState } from '../reducers';
import { LoginActions } from '../containers/Login';
import '../assets/styles/Login.scss';

/**
 * IProps.
 */
interface IProps {
  className?: string;
}

/**
 * TProps.
 */
type TProps = IProps & RootState & LoginActions;

/**
 * Presentational Component.
 */
const Component: React.FC<TProps> = (props: TProps) => {
  return (
    <div className='login'>
      <AuthTitleLabel className='login-auth-title-label' />
      {/* <EmailInputText
        className='login-email-input-text'
        value={props.auth.email}
        onChange={props.updateEmail}
      /> */}
      <NameInputText
        className='login-name-input-text'
        value={props.auth.username}
        onChange={props.updateUsername}
      />
      <PasswordInputText
        className='login-password-input-text'
        value={props.auth.password}
        onChange={props.updatePassword}
      />
      <AuthForgotPasswordLink className='login-auth-forgot-password-link' />
      <LoginButton
        className='login-login-button'
        onClick={props.requestLogin}
      />
      <LoginIconButtonGroup className='login-login-icon-button-group' />
      <AuthCreateNewAccountLink className='login-auth-create-new-account-link' />
      {/* <AuthSkipLoginLink className='auth-skip-login-link' /> */}
    </div>
  );
};

export default Component;
