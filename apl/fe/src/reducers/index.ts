import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

const rootReducer = (history: History<unknown>) =>
  combineReducers({
    router: connectRouter(history),
  });

export default rootReducer;
