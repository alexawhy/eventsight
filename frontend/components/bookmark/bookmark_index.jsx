import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BookmarkIndexItem from './bookmark_index_item';

class BookmarkIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBookmarks(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.events.length !== prevProps.events.length) {
      this.props.fetchBookmarks(this.props.match.params.userId);
    }
  }

  render() {
    debugger
    const { events, fetchEvent, deleteBookmark, currentUser } = this.props;

    // if (!events) {
    //   return (
    //     <p className="message">
    //       Nothing here yet. <Link to="/">Find interesting events</Link> to join!
    //     </p>
    //   )
    // }
    
    const content = events.length > 0 ? (
      <ul className="user-event-index-list">
          {events.map((event, idx) => (
            <BookmarkIndexItem
              event={event}
              key={idx}
              fetchEvent={fetchEvent}
              deleteBookmark={deleteBookmark}
              currentUser={currentUser}
            />
          ))}
        </ul>
    ) : (
      <p className="message">
        Nothing here yet. <Link to="/">Find interesting events</Link> to join!
      </p>
    )

    return (
      <div className="user-event-index">
        <h1>Bookmarked Events</h1>
        {content}
      </div>
    )
  }
}

export default withRouter(BookmarkIndex);