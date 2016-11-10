export const REQUEST_CART = 'REQUEST_CART';
export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const DESTROY_CART_ITEM = 'DESTROY_CART_ITEM';
export const RECEIVE_CART = 'RECEIVE_CART';

export const requestCart = () => ({
  type: REQUEST_CART
});

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart
});

export const addCartItem = (id) => ({
  type: ADD_CART_ITEM,
  id
});

export const receiveCartItem = (cart) => ({
  type: RECEIVE_CART_ITEM,
  cart
});

export const destroyCartItem = (id) => ({
  type: DESTROY_CART_ITEM,
  id
});

export const removeCartItem = (cart) => ({
  type: REMOVE_CART_ITEM,
  cart
});
