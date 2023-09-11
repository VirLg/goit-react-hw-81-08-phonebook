import { createSlice } from '@reduxjs/toolkit';
import { addNewContactThunk, getContactThunk } from 'redux/thunks/thunks';
const initialState = {
  contactArrSwager: [],
  isLoading: false,
  error: '',
};
// const handleAddContactSwagerFulfilled = (state, action) => {
//   console.log('action', action);
//   state.isLoading = false;
//   state.contactArrSwager.push(action.payload);
// };
const handleGetContactSwagerFulfilled = (state, action) => {
  state.isLoading = false;
  state.contactArrSwager = action.payload.data;
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
      // .addCase(addNewContactThunk.fulfilled, handleAddContactSwagerFulfilled)
      .addCase(getContactThunk.fulfilled, handleGetContactSwagerFulfilled)
      // .addCase(addNewContactThunk.fulfilled, handleAddContactSwaggerFulfielled)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});
export default contactApiSlice.reducer;
