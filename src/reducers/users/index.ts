import { reducerWithInitialState } from 'typescript-fsa-reducers';
import getUsersAction from '../../actions/users/getUsers';

interface User {
  id: string;
  name: string;
  age: number;
  mailAddress: string;
}

export interface UsersState {
  user: User;
  users: User[];
}

const initialState: UsersState = {
  user: {
    id: '',
    name: '',
    age: 0,
    mailAddress: ''
  },
  users: []
};

const usersReducer = reducerWithInitialState(initialState).case(
  getUsersAction.done,
  (inState, { result: { json: users } }) => ({ ...inState, users })
);

export default usersReducer;
