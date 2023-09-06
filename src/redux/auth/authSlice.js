import { createSlice } from '@reduxjs/toolkit';
import {
  logOutThunk,
  loginThunk,
  refreshThunk,
  signUpThunk,
} from './authThunk';
import { delToken } from 'api/auth';

const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
  user: null,
};

const handleLogin = (state, action) => {
  state.access_token = action.payload.token;
  state.user = action.payload.user;
};
const handleSignUp = (state, action) => {
  state.access_token = action.payload.token;
  state.user = action.payload.user;
};
const handlelogOut = (state, action) => {
  state.isLoading = false;
  state.error = '';
  state.access_token = '';
  state.user = null;
  delToken();
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handlePending = state => {
  state.isLoading = true;
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // .addCase(refreshThunk.fulfilled, handleLogin)
      .addCase(loginThunk.fulfilled, handleLogin)
      .addCase(signUpThunk.fulfilled, handleSignUp)
      .addCase(logOutThunk.fulfilled, handlelogOut)
      .addMatcher(action => {
        return action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        return action.type.endsWith('/rejected');
      }, handleRejected);
  },
});
export default authSlice.reducer;
