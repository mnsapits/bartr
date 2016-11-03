export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const requestProducts = () => ({
  type: REQUEST_PRODUCTS
});

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products
});
