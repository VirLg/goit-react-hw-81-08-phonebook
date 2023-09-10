// import { addNewContactSwager, getContactSwager } from 'api/apiSwager';

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
  (state, thunkApi) => {
    try {
      return getContactSwager(state);
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
