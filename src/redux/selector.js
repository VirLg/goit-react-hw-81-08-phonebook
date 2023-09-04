export const myContactSelector = state => state;
export const myFilterSelector = state =>
  state.contactApi.contactsApi.filter(el =>
    el.name.toLowerCase().includes(state.contactFilter.toLowerCase())
  );
export const tokenSelector = state => state.auth.access_token;
export const userSelector = state => state.auth.user;
