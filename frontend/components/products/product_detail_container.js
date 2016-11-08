import { connect } from 'react-redux';
import ProductDetail from './product_detail';
import { clearCurrentProduct } from '../../actions/products_actions';

const mapStateToProps = ({currentProduct}) => ({
  currentProduct
});

const mapDispatchToProps = dispatch => ({
  clearCurrentProduct: () => dispatch(clearCurrentProduct())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
