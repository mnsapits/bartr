import {
  RECEIVE_PRODUCTS,
  RECEIVE_NEW_PRODUCT,
  CLEAR_PRODUCTS
} from '../actions/products_actions';

import merge from 'lodash/merge';

const defaultProducts = {};

const ProductsReducer = (state = defaultProducts, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PRODUCTS:
      return action.products;
    case RECEIVE_NEW_PRODUCT:
      let newState = merge({}, state);
      let newProduct = action.product;
      return merge(newState, {[newProduct.id]: newProduct});
    case CLEAR_PRODUCTS:
      return {};
    default:
      return state;
  }
};

export default ProductsReducer;
