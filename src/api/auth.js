import axios from 'axios';

const setToken = token => {
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
export const refresh = async tok => {
  const token = localStorage.getItem('token');
  setToken(token);
  console.log('tok', tok);
  const { data } = await instance('/users/current');
  // setToken(data.token);
  console.log('data', data);
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
