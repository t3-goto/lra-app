import * as React from 'react';
import AuthTitleLabel from './AuthTitleLabel';
import EmailInputText from './EmailInputText';
import PasswordInputText from './PasswordInputText';
import AuthForgotPasswordLink from './AuthForgotPasswordLink';
import LoginButton from './LoginButton';
import LoginIconButtonGroup from './LoginIconButtonGroup';
import AuthCreateNewAccountLink from './AuthCreateNewAccountLink';
import AuthSkipLoginLink from './AuthSkipLoginLink';

import '../assets/styles/Login.scss';

/**
 * IProps.
 */
interface IProps {
  className?: string;
}

/**
 * Presentational Component.
 */
const Component: React.FC<IProps> = () => {
  return (
    <div className='login'>
      <AuthTitleLabel className='login-auth-title-label' />
      <EmailInputText className='login-email-input-text' />
      <PasswordInputText className='login-password-input-text' />
      <AuthForgotPasswordLink className='login-auth-forgot-password-link' />
      <LoginButton className='login-login-button' />
      <LoginIconButtonGroup className='login-login-icon-button-group' />
      <AuthCreateNewAccountLink className='login-auth-create-new-account-link' />
      {/* <AuthSkipLoginLink className='auth-skip-login-link' /> */}
    </div>
  );
};

export default Component;
