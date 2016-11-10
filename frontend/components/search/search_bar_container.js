import { connect } from 'react-redux';
import { searchProducts } from '../../actions';
import SearchBar from './search_bar';

const mapStateToProps = ({ searchResults }) => ({
  searchResults
});

const mapDispatchToProps = dispatch => ({
  searchProducts: (query) => dispatch(searchProducts(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
