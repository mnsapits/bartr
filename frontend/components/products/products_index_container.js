import { connect } from 'react-redux';
import { requestProducts } from '../../actions/products_actions';
import ProductIndex from './product_index';

const mapStateToProps = ({ products }) => ({
  products
});

export default connect(
  mapStateToProps,
  null
)(ProductIndex);
