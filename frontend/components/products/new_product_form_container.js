import { connect } from 'react-redux';
import { addProduct, clearProductErrors } from '../../actions/products_actions';
import NewProductForm from './new_product_form';

const mapStateToProps = ({errors}) => ({
  errors: errors.productErrors
});

const mapDispatchToProps = dispatch => ({
  addProduct: (product) => dispatch(addProduct(product)),
  clearProductErrors: () => dispatch(clearProductErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProductForm);
