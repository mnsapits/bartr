import {
  receiveProducts,
  REQUEST_PRODUCTS
} from '../actions/products_actions';

import {
  requestProducts
} from '../util/products_api_util';

const ProductsMiddleware = ({getState, dispatch}) => next => action => {
  let receiveProductsSuccess = (data) => dispatch(receiveProducts(data));

  switch(action.type) {
    case REQUEST_PRODUCTS:
      requestProducts(receiveProductsSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default ProductsMiddleware;
