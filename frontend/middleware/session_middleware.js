import {
  receiveCurrentUser,
  receiveErrors,
  LOGIN,
  LOGOUT,
  SIGNUP
} from '../actions/session_actions';
import {
  clearCart
} from '../actions/cart_actions';

import { login, signup, logout } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => {
    dispatch(receiveCurrentUser(user));
  };
  const clearCartSuccess = () => dispatch(clearCart());
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));
  switch(action.type){
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(clearCartSuccess);
      return next(action);
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
