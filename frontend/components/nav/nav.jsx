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
    this.expandDropdown = this.expandDropdown.bind(this);
    this.collapseDropdown = this.collapseDropdown.bind(this);
  }

  expandDropdown() {
    this.setState({visible: true});
  }

  collapseDropdown() {
    this.setState({visible: false});
  }

  render () {
    const { currentUser, logout } = this.props;
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const dropdownState = this.state.visible ? 'expand' : 'collapse';
    if (currentUser == null) {
      return (
        <nav className="nav">
          <div className="navbar">
            <div className="nav-logo">
              <a href="/">
                <img src={window.logo} alt="eventsight" className="logo"/>
              </a>
            </div>
            <ul className="auth-links">
              {/* <Link to="/signin">Sign In</Link> */}
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/login">Log In</Link></li>
            </ul>
          </div>
        </nav>
      )
    } else {
      return (
        <nav className="nav">
          <div className="navbar">
            <div className="nav-logo">
              <img src={window.logo} alt="eventsight" className="logo"/>
            </div>
            <ul className="nav-links">
              <li className="user-dropdown" onClick={this.expandDropdown}>
                <div className="user-dropdown-icon">
                  {userIcon}
                </div>
              </li>
            </ul>
          </div>
          <ul className={`user-dropdown-list ${dropdownState}`} tabIndex="0" onBlur={this.collapseDropdown} >
            <li className="user-info">
              <div className="user-info-name">{currentUser.fname} {currentUser.lname}</div>
              <div className="user-info-email">{currentUser.email}</div>
            </li>
            <li className="logout">
              <Link to="/" onClick={logout}>Log Out</Link>
            </li>
          </ul>
        </nav>
      )
    }
  }
}

export default Nav;

