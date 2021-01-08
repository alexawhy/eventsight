import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import * as DateTimeUtil from '../../util/datetime_util';

class BookmarkIndexItem extends React.Component {
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
    this.props.deleteBookmark(event.event_id, event.bookmark_id);
  }

  render() {
    const { event, currentUser } = this.props;
    const indexItemDate = DateTimeUtil.indexItemDate(event);
    
    const userOption = (
      <div className="user-event-index-item-options">
        <FontAwesomeIcon className="bookmark" icon={faHeartSolid} onClick={this.handleDelete} />
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

export default withRouter(BookmarkIndexItem);