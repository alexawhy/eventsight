import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <a href="https://github.com/alexawhy/eventsight" target="_blank">
          <FontAwesomeIcon className="footer-icon" icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/alexandria-hy-wong/" target="_blank">
          <FontAwesomeIcon className="footer-icon" icon={faLinkedin} />
        </a>
        <a href="https://angel.co/u/alexandria-wong" target="_blank">
          <FontAwesomeIcon className="footer-icon" icon={faAngellist} />
        </a>
        <a href="https://alexandria-wong.com/" target="_blank">
          <FontAwesomeIcon className="footer-icon" icon={faAddressCard} />
        </a>
      </div>
    )
  }
}

export default Footer;
