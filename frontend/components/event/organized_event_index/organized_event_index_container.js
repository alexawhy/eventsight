import { connect } from 'react-redux';
import { fetchOrganizedEvents } from '../../../actions/event_actions';
import OrganizedEventIndex from './organized_event_index';

const mapStateToProps = ({ entities: { events }, session}) => {
  return {
    events: Object.values(events),
    currentUserId: session.currentUserId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrganizedEvents: (userId) => dispatch(fetchOrganizedEvents(userId)),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizedEventIndex);