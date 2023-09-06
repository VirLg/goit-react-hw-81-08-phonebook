import axios from 'axios';

const setToken = token => {
  console.log('token', token);
  localStorage.setItem('token', token);
  return (instance.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${token}`);
};
export const delToken = () =>
  delete instance.defaults.headers.common['Authorization'];

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
export const refresh = async () => {
  // const token = localStorage.getItem('token');
  // setToken(token);
  const { data } = await instance('/users/current');
  // setToken(data.token);
  return data;
};
export const login = async body => {
  const { data } = await instance.post('users/login', body);
  setToken(data.token);
  return data;
};
export const signUp = async body => {
  const { data } = await instance.post('/users/signup', body);
  setToken(data.token);
  return data;
};
export const logOut = async () => {
  return await instance.post('/users/logout');
};
