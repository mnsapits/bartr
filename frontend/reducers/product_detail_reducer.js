import{ RECEIVE_PRODUCT, CLEAR_CURRENT_PRODUCT } from '../actions/products_actions';

const _defaultCurrentProduct = {
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

const ProductDetailReducer = (state = _defaultCurrentProduct, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PRODUCT:
      return action.product;
    case CLEAR_CURRENT_PRODUCT:
      return _defaultCurrentProduct;
    default:
      return state;
  }
};

export default ProductDetailReducer;
