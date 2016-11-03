import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import ProductsMiddleware from '../middleware/products_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ProductsMiddleware
);

export default RootMiddleware;
