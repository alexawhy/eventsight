import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid }  from '@fortawesome/free-solid-svg-icons';
import { Link, withRouter } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookmarked: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleCreateBookmark = this.handleCreateBookmark.bind(this);
    this.handleDeleteBookmark = this.handleDeleteBookmark.bind(this);
  }

  handleClick() {
    const { event } = this.props;
    this.props.history.push(`/events/${event.id}`);
  }

  handleCreateBookmark(e) {
    const { event, currentUserId } = this.props;
    if (currentUserId) {
      e.preventDefault();
      this.props.createBookmark(event.id);
      this.setState({ bookmarked: true });
    } else {
      this.props.history.push('/login');
    }
  }

  handleDeleteBookmark(e) {
    const { event } = this.props;
    e.preventDefault();
    this.setState({ bookmarked: false });
    this.props.deleteBookmark(event.id);
  }
  
  render() {
    const { event, bookmarks } = this.props;
    const datetime = event.start_time ? <p>{event.start_date}, {event.start_time}</p> : <p>{event.start_date}</p>;

    const bookmark = this.state.bookmarked || bookmarks.includes(event.id) 
      ?
      <FontAwesomeIcon className="bookmark selected" icon={faHeartSolid} onClick={this.handleDeleteBookmark}/>
      :
      <FontAwesomeIcon className="bookmark" icon={faHeart} onClick={this.handleCreateBookmark}/>

    return (
      <div className="event-index-item">
        <div className="event-index-item-image redirect">
          <img src={event.imageUrl} alt={event.title} onClick={this.handleClick} />
        </div>
        <div className="event-index-bookmark">
          {bookmark}
        </div>
        <div className="event-index-item-time">
          {datetime}
        </div>
        <div className="event-index-item-title redirect" onClick={this.handleClick}>
          {event.title}
        </div>
      </div>
    )
  }
}

export default withRouter(EventIndexItem);