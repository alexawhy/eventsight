import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import EventTime from './time_component'

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
    window.scrollTo(0, 0);
  }

  handleRedirect() {
    const { currentUserId } = this.props;
    this.props.history.push(`/users/${currentUserId}/registrations`)
  }

  render() {
    const { event, currentUserId, openModal } = this.props;
    if (!event) return null;

    const locationHeader = event.online === true ? 'Online Event' : 'Location';
    const button = event.attendees.includes(currentUserId) ?
      <button onClick={this.handleRedirect}>Cancel Registration</button> :
      <button className="register-btn" onClick={() => openModal('registration')}>
        Register
      </button> 

    return(
      <div className="event-show">
        <div className="background">
          <img src={event.imageUrl} alt=""/>
        </div>
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
              {button}
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
              <EventTime event={event} />
              <h3>{locationHeader}</h3>
              <p>{event.venue}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventShow;