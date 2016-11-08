import { RECEIVE_PRODUCT_ERRORS, CLEAR_PRODUCT_ERRORS, RECEIVE_NEW_PRODUCT } from '../actions/products_actions';
import merge from 'lodash/merge';

const _defaultErrors = {productErrors: []};

const ErrorsReducer = (state = _defaultErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT_ERRORS:
      let newState = merge({}, state);
      newState.productErrors = action.errors;
      return newState;
    case RECEIVE_NEW_PRODUCT:
    case CLEAR_PRODUCT_ERRORS:
      let newErrorState = merge({}, state);
      newErrorState.productErrors = [];
      return newErrorState;

    default:
      return state;
  }
};

export default ErrorsReducer;
