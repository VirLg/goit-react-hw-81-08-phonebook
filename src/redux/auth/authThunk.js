import { createAsyncThunk } from '@reduxjs/toolkit';
import { logOut, login, refresh, signUp } from 'api/auth';

export const loginThunk = createAsyncThunk('auth/login', (body, thunkApi) => {
  try {
    return login(body);
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
});
export const signUpThunk = createAsyncThunk('auth/signUp', (body, thunkApi) => {
  try {
    return signUp(body);
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
});
export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  (token, thunkApi) => {
    try {
      return refresh(token);
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const logOutThunk = createAsyncThunk('auth/logout', (body, thunkApi) => {
  try {
    return logOut(body);
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
});
