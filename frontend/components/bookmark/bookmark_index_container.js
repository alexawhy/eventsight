import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_actions';
import { fetchBookmarks, createBookmark, deleteBookmark  } from '../../actions/bookmark_actions';
import BookmarkIndex from './bookmark_index';

const mapStateToProps = ({ entities: { events, users }, session}) => {
  return {
    events: Object.values(events),
    currentUser: users[session.currentUserId]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookmarks: (userId) => dispatch(fetchBookmarks(userId)),
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    createBookmark: (eventId) => dispatch(createBookmark(eventId)),
    deleteBookmark: (eventId, bookmarkId) => dispatch(deleteBookmark(eventId, bookmarkId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkIndex);