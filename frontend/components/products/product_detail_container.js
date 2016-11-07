import { connect } from 'react-redux';
import ProductDetail from './product_detail';

const mapStateToProps = ({currentProduct}) => ({
  currentProduct
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
