import { connect } from 'react-redux';

import { login, clearSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form'

const mapStateToProps = ({ errors }, ownProps) => {
  debugger
  return {
    errors: errors.session,
    formType: 'login'    
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);