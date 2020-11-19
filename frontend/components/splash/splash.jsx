import React from "react";

class Splash extends React.Component {
  render () {
    return (
      <div className="splash">
        <img src={window.splash} alt="splash" className="splash-img"/>
        <div className="splash-text-box">
          <p className="splash-text">Connect through</p>
          <p className="splash-text-strong">online events</p>
          <button className="splash-btn">Browse Event</button>
        </div>
        <div className="splash-bg"></div> 
      </div>
    )
  }
}

export default Splash;