import { createSlice } from '@reduxjs/toolkit';
import { deleteContactThunk, getContactThunk } from 'redux/thunks/thunks';
const initialState = {
  contactArrSwager: [],
  isLoading: false,
  error: '',
};

const handleGetContactSwagerFulfilled = (state, action) => {
  state.isLoading = false;
  state.contactArrSwager = action.payload.data;
};
const handleDeleteContactSwagerFulfilled = (state, action) => {
  console.log('state', state);
  console.log('action', action.payload);
};
const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const contactApiSlice = createSlice({
  name: 'contactArrSwager',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactThunk.fulfilled, handleGetContactSwagerFulfilled)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContactSwagerFulfilled)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});
export default contactApiSlice.reducer;
