import {
  receiveProducts,
  receiveNewProduct,
  REQUEST_PRODUCTS,
  ADD_PRODUCT,
  receiveProductErrors,
} from '../actions/products_actions';

import {
  requestProducts,
  addProduct
} from '../util/products_api_util';

const ProductsMiddleware = ({getState, dispatch}) => next => action => {
  let receiveProductsSuccess = (data) => dispatch(receiveProducts(data));
let receiveNewProductSuccess = (data) => dispatch(receiveNewProduct(data));
  let productErrors = errors => {
    dispatch(receiveProductErrors(errors.responseJSON));
  };

  switch(action.type) {
    case REQUEST_PRODUCTS:
      requestProducts(receiveProductsSuccess);
      return next(action);
    case ADD_PRODUCT:
      addProduct(action.product, receiveNewProductSuccess, productErrors);
      return next(action);
    default:
      return next(action);
  }
};

export default ProductsMiddleware;
