import { createAsyncThunk } from '@reduxjs/toolkit';
import { logOut, login, refresh, signUp } from 'api/auth';

// export const refreshThunk = createAsyncThunk(
//   'auth/refresh',
//   async (_, rejectWithValue) => {
//     try {
//       const data = await refresh();

//       return data;
//     } catch {
//       return rejectWithValue('');
//     }
//   }
// );
export const loginThunk = createAsyncThunk('auth/login', body => login(body));
export const signUpThunk = createAsyncThunk('auth/signUp', body =>
  signUp(body)
);
export const logOutThunk = createAsyncThunk('auth/logout', body => {
  logOut(body);
});
