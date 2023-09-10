import { createAsyncThunk } from '@reduxjs/toolkit';
import { logOut, login, refresh, signUp } from 'api/auth';

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  token => {
    console.log('token', token);
    refresh(token);
  }

  // async (token, rejectWithValue) => {
  // console.log('token', token);
  // try {
  //   const data = await refresh(token);
  //   console.log('first', token);
  //   return data;
  // } catch {
  //   return rejectWithValue('');
  // }
);
export const loginThunk = createAsyncThunk('auth/login', body => login(body));
export const signUpThunk = createAsyncThunk('auth/signUp', body =>
  signUp(body)
);
export const logOutThunk = createAsyncThunk('auth/logout', body => {
  logOut(body);
});
