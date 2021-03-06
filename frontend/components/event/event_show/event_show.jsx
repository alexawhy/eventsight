import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid }  from '@fortawesome/free-solid-svg-icons';
import * as DateTimeUtil from '../../../util/datetime_util';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookmarked: false };
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleCreateBookmark = this.handleCreateBookmark.bind(this);
    this.handleDeleteBookmark = this.handleDeleteBookmark.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
    window.scroll(0, 0);
  }

  handleRedirect() {
    const { currentUserId } = this.props;
    this.props.history.push(`/users/${currentUserId}/registrations`)
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
    const { event, currentUserId, bookmarks, openModal } = this.props;
    if (!event) return null;

    const showHeaderDate = DateTimeUtil.showHeaderDate(event);
    const showMainDate = DateTimeUtil.showMainDate(event);
    const locationHeader = event.online ? 'Online Event' : 'Location';
    const location = event.venue === 'null' ? '' : <p>{event.venue}</p>;
    const registerButton = event.attendees.includes(currentUserId) ?
      <button onClick={this.handleRedirect}>Cancel Registration</button> :
      <button className="register-btn" onClick={() => openModal('registration')}>
        Register
      </button> 

    const bookmark = this.state.bookmarked || bookmarks.includes(event.id) 
      ?
      <FontAwesomeIcon className="bookmark selected" icon={faHeartSolid} onClick={this.handleDeleteBookmark}/>
      :
      <FontAwesomeIcon className="bookmark" icon={faHeart} onClick={this.handleCreateBookmark}/>

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
                {showHeaderDate}
              </div>
              <h1 id="event-title">{event.title}</h1>
            </div>
          </div>
          <div className="event-show-action">
            <div className="left">
              {bookmark}
            </div>
            <div className="right">
              {registerButton}
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
              {showMainDate}
              <h3>{locationHeader}</h3>
              {location}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventShow;