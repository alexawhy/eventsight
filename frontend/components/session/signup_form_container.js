import { connect } from 'react-redux';

import { signup, login, clearSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form'

const mapStateToProps = ({ errors }, ownProps) => {
  return {
    errors: errors.session,
    formType: 'signup',
    history: ownProps.history
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(SignupForm);