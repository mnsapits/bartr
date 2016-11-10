import {
  receiveProductErrors,
  receiveProducts,
  receiveProduct,
  receiveNewProduct,
  searchResults,
  SEARCH_PRODUCTS,
  REQUEST_PRODUCTS,
  REQUEST_PRODUCT,
  ADD_PRODUCT
} from '../actions/products_actions';

import {
  requestProducts,
  requestProduct,
  searchProducts,
  addProduct
} from '../util/products_api_util';

import { hashHistory } from 'react-router';

const ProductsMiddleware = ({getState, dispatch}) => next => action => {
  let receiveProductsSuccess = (data) => dispatch(receiveProducts(data));
  let receiveNewProductSuccess = (data) => {
    hashHistory.push(`product/${data.id}`);
    dispatch(receiveNewProduct(data));
  };
  let receiveProductSuccess = (data) => dispatch(receiveProduct(data));
  let productErrors = errors => {
    dispatch(receiveProductErrors(errors.responseJSON));
  };
  let receiveSearchResults = (data) => dispatch(searchResults(data));

  switch(action.type) {
    case REQUEST_PRODUCTS:
      requestProducts(receiveProductsSuccess);
      return next(action);
    case ADD_PRODUCT:
      addProduct(action.product, receiveNewProductSuccess, productErrors);
      return next(action);
    case REQUEST_PRODUCT:
      requestProduct(action.id, receiveProductSuccess);
      return next(action);
    case SEARCH_PRODUCTS:
      searchProducts(action.query, receiveSearchResults);
      return next(action);
    default:
      return next(action);
  }
};

export default ProductsMiddleware;
