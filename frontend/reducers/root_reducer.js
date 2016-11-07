import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ProductsReducer from './products_reducer';
import ProductDetailReducer from './product_detail_reducer';
import ErrorsReducer from './errors_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  products: ProductsReducer,
  currentProduct: ProductDetailReducer,
  errors: ErrorsReducer
});

export default RootReducer;
