import { connect } from 'react-redux';
import { searchProducts, clearSearch } from '../../actions/products_actions';
import SearchBar from './search_bar';

const mapStateToProps = ({ searchResults }) => ({
  searchResults
});

const mapDispatchToProps = dispatch => ({
  clearSearch: () => dispatch(clearSearch()),
  searchProducts: (query) => dispatch(searchProducts(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
