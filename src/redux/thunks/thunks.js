import { addNewContactSwager, getContactSwager } from 'api/auth';

const { createAsyncThunk } = require('@reduxjs/toolkit');

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
export const getContactThunk = createAsyncThunk(
  'get/swager',
  ({ data }, thunkApi) => {
    try {
      return getContactSwager(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
