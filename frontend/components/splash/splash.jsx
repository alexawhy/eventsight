import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.scrollDown = this.scrollDown.bind(this);
  };

  scrollDown() {
    window.scrollTo({
      top: 460,
      behavior: 'smooth'
    })
  }

  render() {
    return (
      <div className="splash">
        <img src={window.splash} alt="splash" className="splash-img"/>
        <div className="splash-text-box">
          <p className="splash-text">Connect through</p>
          <p className="splash-text-strong">online events</p>
          <button className="splash-btn" onClick={this.scrollDown}>
            <p>Browse events</p>
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </button>
        </div>
        <div className="splash-bg"></div> 
      </div>
    )
  }
}

export default Splash;