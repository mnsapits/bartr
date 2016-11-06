import { connect } from 'react-redux';
import ProductIndex from './product_index';

const mapStateToProps = ({ products }) => ({
  products
});

export default connect(
  mapStateToProps,
  null
)(ProductIndex);
