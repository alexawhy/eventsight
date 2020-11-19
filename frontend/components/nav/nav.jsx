import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { extend } from 'lodash';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  // toggleDropdown(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   this.setState({visible: !this.state.visible}, () => {
  //     if (this.state.visible) {
  //       document.addEventListener("mouseenter", this.toggleDropdown)
  //     }
  //     else {
  //       document.removeEventListener("click", this.toggleDropdown)
  //     }
  //   })
  // }

  render() {
    const { currentUser, logout } = this.props;
    const userIcon = <FontAwesomeIcon icon={faUser} />;
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
            <div className="auth-links">
              {/* <Link to="/signin">Sign In</Link> */}
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Log In</Link>
            </div>
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
            <div className="nav-links">
              <a>Create Events</a>
              <a>Tickets</a>
              <div class="user-dropdown" onClick={this.toggleDropdown}>
                <div className="user-dropdown-trigger">
                  <FontAwesomeIcon className="user-icon" icon={faUser}/>
                  <FontAwesomeIcon className="down-icon" icon={faAngleDown} />
                </div>
                <ul className={`user-dropdown-list ${dropdownState}`}>
                  <li className="user-info">
                    <div className="user-info-name">{currentUser.fname} {currentUser.lname}</div>
                    <div className="user-info-email">{currentUser.email}</div>
                  </li>
                  <li onClick={logout}>
                    <Link to="/" className="logout">Log Out</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )
    }
  }
}

export default Nav;

