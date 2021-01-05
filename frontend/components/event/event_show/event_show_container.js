import { connect } from 'react-redux';
import { fetchEvent, createBookmark, deleteBookmark } from '../../../actions/event_actions';

import { openModal } from '../../../actions/modal_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
  return {
    event: state.entities.events[ownProps.match.params.eventId],
    currentUserId: state.session.currentUserId,
    bookmarks: state.entities.users[state.session.currentUserId].bookmarked_events
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    openModal: (modal) => dispatch(openModal(modal)),
    createBookmark: (eventId) => dispatch(createBookmark(eventId)),
    deleteBookmark: (eventId, bookmarkId) => dispatch(deleteBookmark(eventId, bookmarkId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);