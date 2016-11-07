import{ RECEIVE_PRODUCT } from '../actions/products_actions';

const _currentProduct = {
  seller_id: "",
  name: "",
  details: "",
  image_url: "",
  price: "",
  location: ""
};

const ProductDetailReducer = (state = _currentProduct, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PRODUCT:
      return action.product;
    default:
      return state;
  }
};

export default ProductDetailReducer;
