import axios from 'axios';

const setToken = token => {
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
  localStorage.setItem('token', token);
  setToken(token);
  const { data } = await instance('/users/current');
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
  return data;
};
export const deleteContactSwager = id => {
  console.log('id', id);
  instance.delete(`/contacts/${id}`);
};
