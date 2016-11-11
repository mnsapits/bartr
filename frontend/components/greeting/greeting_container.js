import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { requestCart } from '../../actions/cart_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  requestCart: () => dispatch(requestCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
