import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        fname: '',
        lname: '',
        password: ''
      },
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  update(field) {
    return e => {
      let newUser = Object.assign({}, this.state.user);
      newUser[field] = e.target.value;
      this.setState({ user: newUser });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state.user);
    this.props.signup(user)
      .then(() => this.props.history.goBack());
  }

  handleDemoLogin() {
    const demo = { email: 'demo@example.com', password: 'pa$$word'};
    this.props.login(demo);
    this.props.history.goBack();
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  handleErrors() {
    let formErrors = {};
    if (this.props.errors === "") return;
    this.props.errors.map((error) => {
      const field = error.split(" ")[0];
      formErrors[field] = error;
    })
    return formErrors;
  }
  
  render() {
    let formErrors = this.handleErrors();
    let emailError = formErrors['Email'] ? <p className="error-msg">{formErrors['Email']}</p> : ""
    let fnameError = formErrors['Fname'] ? <p className="error-msg">First name can't be blank</p> : ""
    let lnameError = formErrors['Lname'] ? <p className="error-msg">Last name can't be blank</p> : ""
    let passwordError = formErrors['Password'] ? <p className="error-msg">{formErrors['Password']}</p> : ""

    const { user } = this.state;
    const userIcon = <FontAwesomeIcon className="session-icon" icon={faUser} size="4x"/>;

    return (
      <div className="session-form-container">
        {userIcon}
        <h1 className="session-form-title">Welcome</h1>
        <h3 className="session-form-greeting">Create an account.</h3>
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <div className="session-form">
            <div className={`email`}>
              <div className="input-wrapper">
                <label htmlFor="input-email">Email</label>
                <input 
                  type="text"
                  id="input-email"
                  value={user.email}
                  onChange={this.update('email')}
                />
              </div>
              {emailError}
            </div>
            <div className="name">
              <div className="fname">
                <div className="input-wrapper">
                  <label htmlFor="input-fname">First Name</label>
                  <input 
                    type="text"
                    id="input-fname"
                    value={user.fname}
                    onChange={this.update('fname')}
                  />
                </div>
                {fnameError}
              </div>
              <div className="lname">
                <div className="input-wrapper">
                  <label htmlFor="input-lname">Last Name</label>
                  <input 
                    type="text"
                    id="input-lname"
                    value={user.lname}
                    onChange={this.update('lname')}
                  />
                </div>
                {lnameError}
              </div>
            </div>
            <div className="password">
              <div className="input-wrapper">
                <label htmlFor="input-password">Password</label>
                <input 
                  type="password"
                  id="input-password"
                  value={user.password}
                  onChange={this.update('password')}
                />
                {passwordError}
              </div>
              <p>Your password must be at least 8 characters</p>
            </div>
            <button className="signup-btn">Sign Up</button>
          </div>
        </form>
        <Link to="/login" className="login-msg">Log In Instead</Link>
        <button 
          className="demo-login-btn" 
          onClick={this.handleDemoLogin}>
          Demo User Login
        </button>
      </div>
    )
  }
};

export default SignupForm;