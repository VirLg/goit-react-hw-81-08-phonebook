import { createSlice } from '@reduxjs/toolkit';
import { authThunk } from './authThunk';
const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
};
const handleFulfilled = () => {};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
      builder.addCase(authThunk.fulfilled, handleFulfilled);
      .addMatcher()
  },
});
