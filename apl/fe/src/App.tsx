import * as React from 'react';
import { Switch, Route } from 'react-router';
import Div100vh from 'react-div-100vh';
import './assets/styles/App.scss';
import Login from './containers/Login';
// import Register from './components/Register';
import Register from './containers/Register';
import Search from './components/Search';
// import Top from './components/Top';
import Top from './containers/Top';

/**
 * IProps.
 */
interface IProps {
  className?: string;
}

/**
 * Root Component.
 */
const Component: React.FC<IProps> = () => {
  return (
    <>
      <Div100vh>
        <Switch>
          <Route exact path='/' component={Top} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/search' component={Search} />
        </Switch>
      </Div100vh>
    </>
  );
};

export default Component;
