import { RECEIVE_PRODUCT_ERRORS } from '../actions/products_actions';
import merge from 'lodash/merge';

const _defaultErrors = {productErrors: []};

const ErrorsReducer = (state = _defaultErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT_ERRORS:
      let newState = merge({}, state);
      return merge(newState, {productErrors: action.errors});
    default:
      return state;
  }
};

export default ErrorsReducer;
