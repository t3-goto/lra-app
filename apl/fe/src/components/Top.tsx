import * as React from 'react';
import AuthTitleLabel from './AuthTitleLabel';
import { RootState } from '../reducers';
import '../assets/styles/Top.scss';
import { ActionCreators } from '../containers/Top';

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
  React.useEffect(() => {
    props.requestGeolocation();
  }, []);

  return (
    <div className='top'>
      <AuthTitleLabel className='top-auth-title-label' />
      {/* <img
        src={`${process.env.PUBLIC_URL}/images/top-icon.svg`}
        className='top-auth-top-icon'
        alt='top icon'
      /> */}
    </div>
  );
};

export default Component;
