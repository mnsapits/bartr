import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ProductsMiddleware from './products_middleware';
import UserMiddleware from './user_middleware';
import CartMiddleware from './cart_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ProductsMiddleware,
  UserMiddleware,
  CartMiddleware
);

export default RootMiddleware;
