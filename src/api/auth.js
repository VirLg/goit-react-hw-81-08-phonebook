import axios from 'axios';

const setToken = token => {
  console.log('token', token);
  // const token = localStorage.getItem('token');
  localStorage.setItem('token', token);
  const a = localStorage.getItem('token');

  return (instance.defaults.headers.common['Authorization'] = `Bearer ${a}`);
};
export const delToken = () =>
  delete instance.defaults.headers.common['Authorization'];

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
export const refresh = async token => {
  console.log('token', token);
  localStorage.setItem('token', token);

  const b = setToken(token);
  console.log('b', b);
  const { data } = await instance('/users/current');
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
  // return await instance.post('/users/logout');
};
export const addNewContactSwager = async body => {
  const data = await instance.post('/contacts', body);
  if (!data) return new Error('some');
};
export const getContactSwager = async () => {
  const data = await instance('/contacts');
  if (!data) return new Error('some');
};
