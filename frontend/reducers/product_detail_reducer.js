import{ RECEIVE_PRODUCT } from '../actions/products_actions';

const _currentProduct = {
  id: "",
  seller_name: "",
  name: "",
  details: "",
  image_url: "",
  price: "",
  location: "",
  seller_id: "",
  seller_store: []
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
