import axios from 'axios';
import { instance } from './auth';
export const addNewContactSwager = body => {
  console.log('instance', instance);
  const data = instance.post('/contacts', body);
  if (!data) return new Error('some');
};
export const getContactSwager = () => {
  console.log('instance', instance);
  const data = instance.post('/contacts');
  if (!data) return new Error('some');
};
