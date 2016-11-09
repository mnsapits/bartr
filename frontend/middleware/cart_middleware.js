import {
  receiveCart,
  receiveCartItem,
  removeCartItem,
  REQUEST_CART,
  ADD_CART_ITEM,
  DESTROY_CART_ITEM
} from '../actions/cart_actions';

import {
  requestCart,
  addCartItem,
  destroyCartItem
} from '../util/cart_api_util';

const CartMiddleware = ({getState, dispatch}) => next => action => {
  const receiveCartSuccess = (data) => dispatch(receiveCart(data));
  const receiveCartItemSuccess = (data) => dispatch(receiveCartItem(data));
  const destroyCartItemSuccess = (data) => dispatch(removeCartItem(data));

  switch (action.type) {
    case REQUEST_CART:
      requestCart(receiveCartSuccess);
      return next(action);
    case ADD_CART_ITEM:
      addCartItem(action.cartItem, receiveCartItemSuccess);
      return next(action);
    case DESTROY_CART_ITEM:
      destroyCartItem(action.id, destroyCartItemSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default CartMiddleware;
