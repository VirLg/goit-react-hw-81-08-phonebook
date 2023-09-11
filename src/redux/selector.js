export const isLoadingSelector = state => state.auth.isLoading;
export const errorSelector = state => state.auth.error;
export const tokenSelector = state => state.auth.access_token;
export const userSelector = state => state.auth.user;
export const contactArrSelector = state =>
  state.contactArrSwager.contactArrSwager;
