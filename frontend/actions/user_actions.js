export const REQUEST_USER_STORE = 'REQUEST_USER_STORE';
export const RECEIVE_USER_STORE = 'RECEIVE_USER_STORE';

export const requestUserStore = (id) => ({
  type: REQUEST_USER_STORE,
  id
});

export const receiveUserStore = (userStore) => ({
  type: RECEIVE_USER_STORE,
  userStore
});
