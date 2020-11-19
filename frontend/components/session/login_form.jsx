import React from "react";
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

class LoginForm extends React.Component {
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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => {
      let newUser = Object.assign({}, this.state.user);
      newUser[field] = e.target.value;
      this.setState({ user: newUser });
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state.user);
    this.props.login(user);
  }

  render() {
    const { user } = this.state;
    const userIcon = <FontAwesomeIcon icon={faUser} size="4x"/>;
    return (
      <div className="session-form-container">
        {userIcon}
        <h1 className="session-form-title">Welcome Back</h1>
        <h3 className="session-form-greeting">Please enter your password to log in.</h3>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <div className="session-form">
            <div className="email">
              <div className="input-wrapper">
                <label htmlFor="input-email">Email</label>
                <input 
                  type="text"
                  id="input-email"
                  value={user.email}
                  onChange={this.update('email')}
                />
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
              </div>
            </div>
            <button className="login-btn">Log In</button>
          </div>
        </form>
        <button 
          className="demo-login-btn" 
          onClick={() => dispatch(login({email: 'demo@example.com', password: 'pa$$word'}))}>
          Demo User Login
        </button>
      </div>
    )
  }
};

export default LoginForm;