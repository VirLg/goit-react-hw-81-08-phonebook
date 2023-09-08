import axios from 'axios';
import { instance } from './auth';

export const addNewContactSwager = () => {
  const data = instance.post('/contacts');
  if (!data) return new Error('some');
};
