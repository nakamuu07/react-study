import actionCreatorFactory from 'typescript-fsa';

interface User {
  id: string;
  name: string;
  age: number;
  mailAddress: string;
}

export interface GetUsersResult {
  json: User[];
}

export interface GetUsersError {
  response: Response;
}

const actionCreator = actionCreatorFactory();
const getUsers = actionCreator.async<{}, GetUsersResult, GetUsersError>(
  'USERS.GET_USERS'
);

export default getUsers;
