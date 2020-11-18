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
          <div className="login">
            <Link to="/login">Sign In</Link>
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
              <li>{currentUser.fname} {currentUser.lname}</li>
              <li>{currentUser.email}</li>
              <li>
                <Link className="logout" to="/" onClick={logout}>Log Out</Link>
              </li>
            </ul>
          </div>
        </nav>
      )
    }
  }
}

export default Nav;
