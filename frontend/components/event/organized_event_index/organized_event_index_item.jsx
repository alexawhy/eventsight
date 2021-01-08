import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as DateTimeUtil from '../../../util/datetime_util';

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
    const { event, deleteEvent, currentUser } = this.props;
    const indexItemDate = DateTimeUtil.indexItemDate(event);
    
    const organizerOptions = (
      <div className="user-event-index-item-options">
        <button className="option" onClick={this.redirectToEdit}>Edit Event</button>
        <button className="option" onClick={() => deleteEvent(event.id)}>Delete Event</button>
      </div>
    )

    return (
      <li className="user-event-index-item">
        <div className="left">
          <div className="user-event-index-item-image redirect">
            <img src={event.imageUrl} alt={event.title} onClick={this.redirectToShow} />
          </div>
          <div className="user-event-details">
            <div className="user-event-index-item-time">
              {indexItemDate}
            </div>
            <div className="user-event-index-item-title redirect" onClick={this.redirectToShow}>
              {event.title}
            </div>
          </div>
        </div>
        {event.organizer_id === currentUser.id ? organizerOptions : null }
      </li>
    )
  }
}

export default withRouter(OrganizedEventIndexItem);