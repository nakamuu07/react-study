import { SagaIterator } from 'redux-saga';
import { all, call, fork, takeEvery } from 'redux-saga/effects';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import getUsersAction from '../../actions/users/getUsers';
import api from '../../api/api';

function* getUsers(): SagaIterator {
  yield takeEvery(getUsersAction.started, function*() {
    yield call(
      bindAsyncAction(getUsersAction, { skipStartedAction: true })(
        function*(): IterableIterator<any> {
          yield call(() => api.usersGet());
        }
      ),
      null
    );
  });
}

function* usersSaga() {
  yield all([fork(getUsers)]);
}

export default usersSaga;
