import axios from 'axios';

const setToken = ({ token }) =>
  (axios.defaults.headers.common['Authorization'] = token);
const instanse = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
export const login = async body => {
  const {
    data: { user },
  } = await instanse.post('users/login', body);

  return user;
};
export const signUp = async body => {
  const { data } = await instanse.post('/users/signup', body);
  setToken(data);
  console.log('data', data);
  return data;
};
