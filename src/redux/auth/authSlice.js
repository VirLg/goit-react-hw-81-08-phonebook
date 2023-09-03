import { createSlice } from '@reduxjs/toolkit';
import { authThunk } from './authThunk';
const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
  user: null,
};
const handleLogin = (state, action) => {
  state.access_token = action.payload.access_token;
  state.user = action.payload.user;
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
      .addCase(authThunk.fulfilled, handleLogin)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});
export default authSlice.reducer;
