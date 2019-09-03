/* eslint-disable func-names */
import { SagaIterator } from 'redux-saga';
import { all, call, fork, takeEvery } from 'redux-saga/effects';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import getUsersAction, { GetUsersResult } from '../../actions/users/getUsers';
import api from '../../api/api';

function* getUsers(): SagaIterator {
  yield takeEvery(getUsersAction.started, function*({ payload }) {
    yield call(
      bindAsyncAction(getUsersAction, { skipStartedAction: true })(
        function*(): IterableIterator<any> {
          const response: Response = yield call(() => api.usersGet());
          const json = yield response.json();

          return { json } as GetUsersResult;
        }
      ),
      payload
    );
  });
}

function* usersSaga() {
  yield all([fork(getUsers)]);
}

export default usersSaga;
