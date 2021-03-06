import { connect } from 'react-redux';
import ProductDetail from './product_detail';
import { clearCurrentProduct } from '../../actions/products_actions';
import { addCartItem } from '../../actions/cart_actions';

const mapStateToProps = ({currentProduct, session, cart}) => ({
  currentProduct,
  cart,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  clearCurrentProduct: () => dispatch(clearCurrentProduct()),
  addCartItem: (productId) => dispatch(addCartItem(productId))

});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
