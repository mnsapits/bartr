import { receiveUserStore, REQUEST_USER_STORE } from '../actions/user_actions';

import { requestUserStore } from '../util/user_api_util';

const UserMiddleware = ({getState, dispatch}) => next => action => {
  const receiveUserStoreSuccess = (data) => {
    dispatch(receiveUserStore(data));
  };
  switch(action.type) {
    case REQUEST_USER_STORE:
      requestUserStore(action.id, receiveUserStoreSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default UserMiddleware;
