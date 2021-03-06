export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const REQUEST_PRODUCT = 'REQUEST_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_NEW_PRODUCT = 'RECEIVE_NEW_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS';
export const CLEAR_PRODUCT_ERRORS = 'CLEAR_PRODUCT_ERRORS';
export const CLEAR_CURRENT_PRODUCT = 'CLEAR_CURRENT_PRODUCT';
export const CLEAR_PRODUCTS = 'CLEAR_PRODUCTS';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const clearSearch = () => ({
  type: CLEAR_SEARCH
});

export const clearProducts = () => ({
  type: CLEAR_PRODUCTS
});

export const searchProducts = (query) => ({
  type: SEARCH_PRODUCTS,
  query
});

export const searchResults = (products) => ({
  type: SEARCH_RESULTS,
  products
});

export const requestProducts = () => ({
  type: REQUEST_PRODUCTS
});

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const requestProduct = (id) => ({
  type: REQUEST_PRODUCT,
  id
});

export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
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

export const clearCurrentProduct = () => ({
  type: CLEAR_CURRENT_PRODUCT
});
