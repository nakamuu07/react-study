import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import getUsersAction from '../../../actions/users/getUsers';
import { State } from '../../../reducers';
import Table from '../../../components/atoms/Table';

/* eslint-disable no-use-before-define */
export interface Sample1Props
  extends ReturnType<typeof mapDispatchToProps>,
    ReturnType<typeof mapStateToProps> {}

const Sample1: React.FC<Sample1Props> = ({ getUsers, users }: Sample1Props) => {
  React.useEffect(() => {
    getUsers();
  }, []);

  const headItems = [
    { id: 'id', value: 'ID' },
    { id: 'name', value: '名前' },
    { id: 'age', value: '年齢' },
    { id: 'mailAddress', value: 'メールアドレス' }
  ];
  const bodyItems = users.map(({ id, name, age, mailAddress }) => [
    { id: 'id', value: id },
    { id: 'name', value: name },
    { id: 'age', value: age },
    { id: 'mailAddress', value: mailAddress }
  ]);

  return <Table headItems={headItems} bodyItems={bodyItems} />;
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUsers: () => dispatch(getUsersAction.started({}))
});

const mapStateToProps = (state: State) => ({
  users: state.users.users
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sample1);
