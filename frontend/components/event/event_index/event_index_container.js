import { connect } from 'react-redux';
import { fetchEvents } from '../../../actions/event_actions';
import { createBookmark, deleteBookmark  } from '../../../actions/bookmark_actions';
import EventIndex from './event_index';

const mapStateToProps = (state) => {
  let currentUserId = state.session.currentUserId;
  let bookmarks = currentUserId ? state.entities.users[state.session.currentUserId].bookmarked_events : [];
  return {
    events: Object.values(state.entities.events),
    currentUserId,
    bookmarks
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    createBookmark: (eventId) => dispatch(createBookmark(eventId)),
    deleteBookmark: (eventId) => dispatch(deleteBookmark(eventId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);