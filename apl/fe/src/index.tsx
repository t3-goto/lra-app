import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './configureStore';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/styles/index.scss';

const history = createBrowserHistory();
const store = configureStore(history);

/**
 * Entry Point.
 */
const Component: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Component />, document.querySelector('#root'));

// If you want your app to work offline and load faster,
// you can change unregister() to register() below.
serviceWorker.register();
