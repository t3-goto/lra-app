import * as React from 'react';
import AuthTitleLabel from './AuthTitleLabel';
import NameInputText from './NameInputText';
import EmailInputText from './EmailInputText';
import PasswordInputText from './PasswordInputText';
import ConfirmPasswordInputText from './ConfirmPasswordInputText';
import RegisterButton from './RegisterButton';
import RegisterIconButtonGroup from './RegisterIconButtonGroup';
import AuthAlreadyHaveAnAccountLink from './AuthAlreadyHaveAnAccountLink';

import '../assets/styles/Register.scss';

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
    <div className='register'>
      <AuthTitleLabel className='register-auth-title-label' />
      <NameInputText
        className='register-name-input-text'
        value=''
        onChange={() => {
          console.log('dd');
        }}
      />
      <EmailInputText
        className='register-email-input-text'
        value=''
        onChange={() => {
          console.log('dd');
        }}
      />
      <PasswordInputText
        className='register-password-input-text'
        value=''
        onChange={() => {
          console.log('dd');
        }}
      />
      <ConfirmPasswordInputText className='register-confirm-password-input-text' />
      <RegisterButton className='register-register-button' />
      <RegisterIconButtonGroup className='register-register-icon-button-group' />
      <AuthAlreadyHaveAnAccountLink className='register-auth-already-have-an-account-link' />
    </div>
  );
};

export default Component;
