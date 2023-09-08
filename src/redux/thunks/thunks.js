const { createAsyncThunk } = require('@reduxjs/toolkit');
const { addNewContactSwager } = require('api/auth');

export const addNewContactThunk = createAsyncThunk(
  'add/swager',
  (state, thunkApi) => {
    try {
      return addNewContactSwager(state);
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
