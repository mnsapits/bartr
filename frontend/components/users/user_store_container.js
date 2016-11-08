import { connect } from 'react-redux';
import UserStore from './user_store';
import { clearCurrentStore } from '../../actions/user_actions';

const mapStateToProps = ({ currentStore }) => ({
  currentStore
});

const mapDispatchToProps = dispatch => ({
  clearCurrentStore: () => dispatch(clearCurrentStore())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserStore);
