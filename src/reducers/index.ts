import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import users, { UsersState } from './users';

export interface State {
  users: UsersState;
  router: RouterState;
}

const reducers = (history: History) =>
  combineReducers({
    users,
    router: connectRouter(history)
  });

export default reducers;
