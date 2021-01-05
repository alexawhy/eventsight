import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';

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
    const datetime = event.start_time ? <p>{event.start_date}, {event.start_time}</p> : <p>{event.start_date}</p>;
    
    const userOption = (
      <div className="user-event-index-item-options">
        <FontAwesomeIcon className="bookmark" icon={faHeart} onClick={this.handleDelete} />
        {/* <button className="option registration-option" onClick={this.handleDelete}>Delete Bookmark</button> */}
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
              {datetime}
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