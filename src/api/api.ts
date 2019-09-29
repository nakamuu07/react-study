const url = 'http://localhost:3001';

const api = {
  itemsGet: (id?: string) =>
    fetch(`${url}/items${id ? `/${id}` : ''}`, { method: 'GET' }),
  itemsPost: () => fetch(`${url}/items`, { method: 'POST' }),
  usersGet: () => fetch(`${url}/users`, { method: 'GET' }),
  usersPost: () => fetch(`${url}/users`, { method: 'POST' })
};

export default api;
