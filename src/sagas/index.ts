import { all, fork } from 'redux-saga/effects';
import users from './users';

function* sagas() {
  yield all([fork(users)]);
}

export default sagas;
