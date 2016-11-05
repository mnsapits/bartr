export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_NEW_PRODUCT = 'RECEIVE_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS';
export const CLEAR_PRODUCT_ERRORS = 'CLEAR_PRODUCT_ERRORS';

export const requestProducts = () => ({
  type: REQUEST_PRODUCTS
});

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const addProduct = product => ({
  type: ADD_PRODUCT,
  product
});

export const receiveNewProduct = product => ({
  type: RECEIVE_NEW_PRODUCT,
  product
});

export const receiveProductErrors = errors => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors
});

export const clearProductErrors = () => ({
  type: CLEAR_PRODUCT_ERRORS
});
