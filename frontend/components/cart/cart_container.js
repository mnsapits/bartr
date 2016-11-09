import { connect } from 'react-redux';
import Cart from './cart';

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = dispatch => ({

});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Cart);
