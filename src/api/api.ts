const url = 'http://localhost:3001';

const api = {
  usersGet: () => fetch(`${url}/users`, { method: 'GET' }),
  usersPost: () => fetch(`${url}/users`, { method: 'POST' })
};

export default api;
