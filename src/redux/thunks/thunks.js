import { addNewContactSwager, getContactSwager } from 'api/auth';

const { createAsyncThunk } = require('@reduxjs/toolkit');

export const addNewContactThunk = createAsyncThunk(
  'add/swager',
  ({ value }, thunkApi) => {
    try {
      console.log('value', value);
      return addNewContactSwager(value);
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
