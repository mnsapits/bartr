import {
  RECEIVE_CART_ITEM,
  REMOVE_CART_ITEM,
  RECEIVE_CART,
  CLEAR_CART
} from '../actions/cart_actions';

import merge from 'lodash/merge';

const _defaultCart = [];

const CartReducer = (state = _defaultCart, action) => {
  Object.freeze(state);
  let newState = [];
  switch (action.type) {
    case RECEIVE_CART:
    case REMOVE_CART_ITEM:
    case RECEIVE_CART_ITEM:
      return action.cart;
    case CLEAR_CART:
      return _defaultCart;
    // case RECEIVE_CART_ITEM:
    //   newState = merge({}, state);
    //   let newCartItem = action.cartItem;
    //   return merge(newState, {[newCartItem.id]:
    //   newCartItem});
    // case REMOVE_CART_ITEM:
    //   newState = merge({}, state);
    //   // delete newState[action.cartItem.id];
    //   return newState;
    default:
      return state;
  }
};

export default CartReducer;
