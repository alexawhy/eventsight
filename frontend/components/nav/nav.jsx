import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { currentUser, logout } = this.props;
    if (currentUser == null) {
      return (
        <nav className="nav">
          <div className="nav-logo">
            eventsight
          </div>
          <div className="signin">
            {/* <Link to="/signin">Sign In</Link> */}
            <Link to="/signin/signup">Sign Up</Link>
            <Link to="/signin/login">Log In</Link>
          </div>
        </nav>
      )
    } else {
      return (
        <nav className="nav">
          <div className="logo">
            eventsight
          </div>
          <div className="user-dropdown">
            <div className="user-dropdown-icon">
              <i className="far fa-user-circle"></i>
            </div>
            <ul className="user-dropdown-list">
              <li className="user-info">
                <div className="user-info-name">{currentUser.fname} {currentUser.lname}</div>
                <div className="user-info-email">{currentUser.email}</div>
              </li>
              <li className="logout">
                <Link to="/" onClick={logout}>Log Out</Link>
              </li>
            </ul>
          </div>
        </nav>
      )
    }
  }
}

export default Nav;
