import { SEARCH_RESULTS, CLEAR_SEARCH } from '../actions/products_actions';
import merge from 'lodash/merge';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SEARCH_RESULTS:
      return action.products;
      case CLEAR_SEARCH:
        return {};
    default:
      return state;
  }
};

export default SearchReducer;
