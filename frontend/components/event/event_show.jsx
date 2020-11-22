import React from 'react';
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';

class EventShow extends React.Component {  
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
  }
  
  componentDidUpdate() {
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  render() {
    const { event } = this.props;
    if (!event) return null;

    const Background = styled.div`
      background-image: url(${event.imageUrl});
      background-size: cover;
      width: 100%;
      height: 60vh;
      position: absolute;
      top: 72px;
      z-index: -1;
      filter: blur(15px);
      transform: scale(1.1);
      opacity: 0.9;
    `

    return(
      <div>
        <Background event={event}/>
        {/* <div className="background">
          <img src={event.imageUrl} alt=""/>
        </div> */}
        <div className="event-show-container">
          <div className="event-show-header">
            <div className="left">
              <img src={event.imageUrl} alt={event.title}/>
            </div>
            <div className="right">
              <div className="event-show-date">
                {event.start_date}
              </div>
              <h1 id="event-title">{event.title}</h1>
            </div>
          </div>
          <div className="event-show-action">
            <div className="left">
              <FontAwesomeIcon className="bookmark" icon={faHeart} />
            </div>
            <div className="right">
              <button className="register-btn">Register</button>
            </div>
          </div>
          <div className="event-show-main">
            <div className="left">
              <div>
                <h3>About this Event</h3>
                <p>{event.description}</p>
              </div>
            </div>
            <div className="right">
              <h3>Date and Time</h3>
              <p>{event.start_date}</p>
              <p>{event.start_time} - {event.end_time}</p>
              <h3>Location</h3>
              <p>{event.venue}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventShow;