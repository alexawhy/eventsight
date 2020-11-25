import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class OrganizedEventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToShow = this.redirectToShow.bind(this);
    this.redirectToEdit = this.redirectToEdit.bind(this);
  }

  redirectToShow() {
    const { event } = this.props;
    this.props.history.push(`/events/${event.id}`)
  }

  redirectToEdit() {
    debugger
    const { event } = this.props;
    // this.props.fetchEvent(event.id);
    this.props.history.push(`/events/${event.id}/edit`)
  }
  
  render() {
    const { event, deleteEvent, currentUser } = this.props;
    const datetime = event.start_time ? <p>{event.start_date}, {event.start_time}</p> : <p>{event.start_date}</p>;
    
    const organizerOptions = (
      <div className="organized-event-index-item-options">
        <button className="option" onClick={this.redirectToEdit}>Edit Event</button>
        <button className="option" onClick={() => deleteEvent(event.id)}>Delete Event</button>
      </div>
    )

    return (
      <div className="organized-event-index-item">
        <div className="left">
          <div className="organized-event-index-item-image redirect">
            <img src={event.imageUrl} alt={event.title} onClick={this.redirectToShow} />
          </div>
          <div className="organized-event-details">
            <div className="organized-event-index-item-time">
              {datetime}
            </div>
            <div className="organized-event-index-item-title redirect" onClick={this.redirectToShow}>
              {event.title}
            </div>
          </div>
        </div>
        {event.organizer_id === currentUser.id ? organizerOptions : null }
      </div>
    )
  }
}

export default withRouter(OrganizedEventIndexItem);