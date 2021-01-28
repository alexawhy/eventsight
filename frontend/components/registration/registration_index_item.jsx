import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as DateTimeUtil from '../../util/datetime_util';

class RegistrationIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToShow = this.redirectToShow.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  redirectToShow() {
    const { event } = this.props;
    this.props.history.push(`/events/${event.event_id}`)
  }

  handleDelete(e) {
    const { event } = this.props;
    e.preventDefault();
    this.props.deleteRegistration(event.event_id, event.registration_id);
  }

  render() {  
    const { event, currentUser } = this.props;
    if (event === undefined) return null;
    const indexItemDate = DateTimeUtil.indexItemDate(event);
    
    const userOption = (
      <div className="user-event-index-item-options">
        <button className="option registration-option" onClick={this.handleDelete}>Cancel Registration</button>
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
        {event.user_id === currentUser.id ? userOption : null }
      </li>
    )
  }
}

export default withRouter(RegistrationIndexItem);