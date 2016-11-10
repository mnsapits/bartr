import { SEARCH_RESULTS } from '../actions/products_actions';
import merge from 'lodash/merge';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SEARCH_RESULTS:
      return action.products;
    default:
      return state;
  }
};

export default SearchReducer;
