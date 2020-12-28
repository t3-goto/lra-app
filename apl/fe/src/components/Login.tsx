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
import { AuthActionCreators as ActionCreators } from '../actions';
import '../assets/styles/Login.scss';

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
    <div className='login'>
      <AuthTitleLabel className='login-auth-title-label' />
      {/* <EmailInputText
        className='login-email-input-text'
        value={props.auth.email}
        onChange={props.updateEmail}
      /> */}
      <NameInputText
        className='login-name-input-text'
        value={props.auth.loginInfo.username}
        onChange={props.updateLoginUsername}
      />
      <PasswordInputText
        className='login-password-input-text'
        value={props.auth.loginInfo.password}
        onChange={props.updateLoginPassword}
      />
      {/* <AuthForgotPasswordLink className='login-auth-forgot-password-link' /> */}
      <AuthSkipLoginLink
        className='login-auth-skip-login-link'
        onClick={props.resetLogin}
      />
      <LoginButton
        className='login-login-button'
        onClick={props.requestLogin}
      />
      <LoginIconButtonGroup className='login-login-icon-button-group' />
      <AuthCreateNewAccountLink
        className='login-auth-create-new-account-link'
        onClick={props.resetLogin}
      />
    </div>
  );
};

export default Component;
