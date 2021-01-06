import { connect } from 'react-redux';
import { fetchEvent } from '../../../actions/event_actions';
import { createBookmark, deleteBookmark  } from '../../../actions/bookmark_actions';
import { openModal } from '../../../actions/modal_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.currentUserId;
  let bookmarks = currentUserId ? state.entities.users[state.session.currentUserId].bookmarked_events : [];
  return {
    event: state.entities.events[ownProps.match.params.eventId],
    currentUserId,
    bookmarks
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    openModal: (modal) => dispatch(openModal(modal)),
    createBookmark: (eventId) => dispatch(createBookmark(eventId)),
    deleteBookmark: (eventId) => dispatch(deleteBookmark(eventId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);