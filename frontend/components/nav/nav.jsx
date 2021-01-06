
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faPlus, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.redirectToOrganizedEvents = this.redirectToOrganizedEvents.bind(this);
  }

  handleClick() {
    this.props.history.push("/")
  }

  redirectToOrganizedEvents() {
    const { currentUser } = this.props;
    this.props.history.push(`/users/${currentUser.id}/events`)
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
    const dropdownState = this.state.visible ? 'expand' : 'collapse';

    const navLogo = (
      <div className="nav-logo" onClick={this.handleClick}>
        <img src={window.logo} alt="eventsight" className="logo"/>
      </div>
    );

    if (currentUser == null) {
      return (
        <nav className="nav">
          <div className="navbar">
            {navLogo}
            <div className="auth-links">
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
            {navLogo}
            <div className="nav-links">
              <Link to="/events/create" className="create-event">
                <FontAwesomeIcon className="plus icon" icon={faPlus}/>
                <span>Create Events</span>
              </Link>
              <Link to={`/users/${currentUser.id}/bookmarks`}>
                <FontAwesomeIcon className="heart icon" icon={faHeart}/>
                <span>Likes</span>
              </Link>
              <Link to={`/users/${currentUser.id}/registrations`}>
                <FontAwesomeIcon className="ticket icon" icon={faTicketAlt} rotation={90}/>
                <span>Tickets</span>
              </Link>
              <div className="user-dropdown">
                <div className="user-dropdown-trigger">
                  <FontAwesomeIcon className="user-icon" icon={faUser}/>
                  <FontAwesomeIcon className="down-icon" icon={faAngleDown} />
                </div>
                <ul className={`user-dropdown-list ${dropdownState}`}>
                  <li className="user-info">
                    <FontAwesomeIcon className="user-icon-small" icon={faUser}/>
                    <div>
                      <div className="user-info-name">{currentUser.fname} {currentUser.lname}</div>
                      <div className="user-info-email">{currentUser.email}</div>
                    </div>
                  </li>
                  <li onClick={this.redirectToOrganizedEvents}>
                    Manage Events
                  </li>
                  <li onClick={logout}>
                    Log Out
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

export default withRouter(Nav);

