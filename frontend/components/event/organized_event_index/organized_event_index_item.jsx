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
    const { event } = this.props;
    this.props.history.push(`/events/${event.id}/edit`)
  }
  
  render() {
    const { event, deleteEvent } = this.props;
    const datetime = event.start_time ? <p>{event.start_date}, {event.start_time}</p> : <p>{event.start_date}</p>;
    
    return (
      <div className="organized-event-index-item">
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
        <div className="organized-event-index-item-options">
          <div className="option" onClick={this.redirectToEdit}>Edit Event</div>
          <div className="option" onClick={deleteEvent}>Delete Event</div>
        </div>
      </div>
    )
  }
}

export default withRouter(OrganizedEventIndexItem);