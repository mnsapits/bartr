import { RECEIVE_USER_STORE } from '../actions/user_actions';
import merge from 'lodash/merge';

const _defaultCurrentStore = {
  id: "",
  username: "",
  products: []
};

const CurrentStoreReducer = (state = _defaultCurrentStore, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_STORE:
      return action.userStore;
    default:
      return state;
  }
};

export default CurrentStoreReducer;
