import { RECEIVE_NEW_PRODUCT } from '../actions/products_actions';
import merge from 'lodash/merge';

const _defaultNewProduct = {
  name: "",
  details: "",
  image_url: "",
  location: "",
  price: null,
};

const NewProductReducer = (state = _defaultNewProduct, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_PRODUCT:
      return merge({}, action.product);
    default:
      return state;
  }
};
