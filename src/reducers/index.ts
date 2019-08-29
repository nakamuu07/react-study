import { combineReducers } from 'redux';
import users, { UsersState } from './users';

export interface State {
  users: UsersState;
}

const reducers = () =>
  combineReducers({
    users
  });

export default reducers;
