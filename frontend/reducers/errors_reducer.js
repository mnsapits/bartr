import { RECIEVE_PRODUCT_ERRORS } from '../actions/products_actions';
import merge from 'lodash/merge';

const _defaultErrors = {productErrors: []};

const ErrorsReducer = (state = _defaultErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECIEVE_PRODUCT_ERRORS:
      return merge(state, {productErrors: action.errors});
    default:
      return state;
  }
};

export default ErrorsReducer;
