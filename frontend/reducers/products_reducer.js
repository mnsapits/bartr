import{ RECEIVE_PRODUCTS } from '../actions/products_actions';
import merge from 'lodash/merge';

const ProductsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PRODUCTS:
      return merge({}, state, action.products);
    default:
      return state;
  }
};

export default ProductsReducer;
