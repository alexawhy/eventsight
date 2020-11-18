import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Nav from './nav';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.currentUserId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Nav);
