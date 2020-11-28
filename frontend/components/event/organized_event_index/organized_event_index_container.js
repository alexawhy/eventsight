import { connect } from 'react-redux';
import { fetchOrganizedEvents, fetchEvent, deleteEvent } from '../../../actions/event_actions';
import OrganizedEventIndex from './organized_event_index';

const mapStateToProps = ({ entities: { events, users }, session}) => {
  return {
    events: Object.values(events),
    currentUser: users[session.currentUserId]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrganizedEvents: (userId) => dispatch(fetchOrganizedEvents(userId)),
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizedEventIndex);