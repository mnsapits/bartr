import{ RECEIVE_PRODUCTS, RECEIVE_NEW_PRODUCT } from '../actions/products_actions';
import merge from 'lodash/merge';

const ProductsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PRODUCTS:
      return action.products;
    case RECEIVE_NEW_PRODUCT:
    debugger;
      return merge({}, state, action.product);
    default:
      return state;
  }
};

export default ProductsReducer;
