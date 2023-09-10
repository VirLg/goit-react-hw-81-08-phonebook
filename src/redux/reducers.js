import { authSlice } from './auth/authSlice';
import { contactApiSlice } from './slice/sliceSwager';
// import { contactApiSlice } from './sliceApiThunk';
// import { sortSlice } from './sliceFilter';

export const reducer = {
  // contactFilter: sortSlice.reducer,
  // contactApi: contactApiSlice.reducer,
  auth: authSlice.reducer,
  contactArrSwager: contactApiSlice.reducer,
};
