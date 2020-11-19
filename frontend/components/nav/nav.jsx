import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  toggleDropdown() {

  }

  render () {
    const { currentUser, logout } = this.props;
    const userIcon = <FontAwesomeIcon icon={faUser} />
    if (currentUser == null) {
      return (
        <nav className="nav">
          <div className="nav-logo">
            <a href="/">
              <img src={window.logo} alt="eventsight" className="logo"/>
            </a>
          </div>
          <div className="auth-links">
            {/* <Link to="/signin">Sign In</Link> */}
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </div>
        </nav>
      )
    } else {
      return (
        <nav className="nav">
          <div className="nav-logo">
            <img src={window.logo} alt="eventsight" className="logo"/>
          </div>
          <div className="nav-links">
            <div className="user-dropdown">
              <div className="user-dropdown-icon">
                {userIcon}
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
          </div>
        </nav>
      )
    }
  }
}

export default Nav;

