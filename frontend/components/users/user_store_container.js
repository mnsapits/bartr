import { connect } from 'react-redux';
import UserStore from './user_store';

const mapStateToProps = ({ currentStore }) => ({
  currentStore
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  null
)(UserStore);
