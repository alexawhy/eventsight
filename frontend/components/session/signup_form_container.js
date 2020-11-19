import { connect } from 'react-redux';

import { signup, clearSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form'

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup'
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(SignupForm);