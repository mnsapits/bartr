import { connect } from 'react-redux';
import UserDetail from './user_detail';

const mapStateToProps = ({ router }) => ({
  router
});

export default connect(
  mapStateToProps,
  null
)(UserDetail);
