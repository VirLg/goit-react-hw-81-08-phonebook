import { addNewContactSwager } from 'api/apiSwager';

// import { addNewContactSwager } from 'api/auth';

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
const getContactSwager = createAsyncThunk('get/swager', () => {});
