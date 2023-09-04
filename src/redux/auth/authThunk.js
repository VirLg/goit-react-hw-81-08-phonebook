import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, signUp } from 'api/auth';

export const loginThunk = createAsyncThunk('auth/login', body => login(body));
export const signUpThunk = createAsyncThunk('auth/signUp', body =>
  signUp(body)
);
