import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { clearProducts } from '../../actions/products_actions';

const mapStateToProps = ({ products }) => ({
  products
});

const mapDispatchToProps = dispatch => ({
  clearProducts: () => dispatch(clearProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductIndex);
