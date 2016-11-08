import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ProductsReducer from './products_reducer';
import ProductDetailReducer from './product_detail_reducer';
import ErrorsReducer from './errors_reducer';
import CurrentStoreReducer from './current_store_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  products: ProductsReducer,
  currentProduct: ProductDetailReducer,
  currentStore: CurrentStoreReducer,
  errors: ErrorsReducer
});

export default RootReducer;
