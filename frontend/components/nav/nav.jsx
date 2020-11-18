import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
    const { history } = this.props;
    history.push('/');
  }

  render () {
    const { currentUserId } = this.props;
    if (currentUserId == null) {
      return (
        null
      )
    } else {
      return (
        null
      )
    }
  }
}

// const Nav = ({ currentUser, logout }) => {
//   const loginLink = () => (
//     <div className="login">
//       <Link to="/login">Sign In</Link>
//     </div>
//   );

//   const userDropdown = () => (
//     <div className="user-dropdown">
//       <div className="user-dropdown-icon">
//         <i className="far fa-user-circle"></i>
//       </div>
//       <div className="user-dropdown-list">
//         <Link className="logout" to="/" onClick={logout}>Log Out</Link>
//       </div>
//     </div>
//   );

  
// };


export default Nav;
