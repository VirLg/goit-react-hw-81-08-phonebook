import axios from 'axios';

const setToken = token =>
  (instance.defaults.headers.common['Authorization'] = `Bearer ${token}`);
const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
export const login = async body => {
  const { data } = await instance.post('users/login', body);
  console.log('first', data.token);
  setToken(data.token);
  return data;
};
export const signUp = async body => {
  const { data } = await instance.post('/users/signup', body);

  setToken(data.token);

  return data;
};
export const logOut = async () => {
  const { data } = await instance.post('/users/logout');

  return data;
};
