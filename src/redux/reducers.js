import { authSlice } from './auth/authSlice';
import { contactApiSlice } from './slice/sliceSwager';

export const reducer = {
  auth: authSlice.reducer,
  contactArrSwager: contactApiSlice.reducer,
};
