import { connect } from 'react-redux';
import { fetchRegistrations, deleteRegistration, fetchEvents, fetchEvent } from '../../actions/event_actions';
import RegistrationIndex from './registration_index';

const mapStateToProps = ({ entities: { events, users }, session}) => {
  return {
    events: Object.values(events),
    currentUser: users[session.currentUserId]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRegistrations: (userId) => dispatch(fetchRegistrations(userId)),
    deleteRegistration: (eventId, registrationId) => dispatch(deleteRegistration(eventId, registrationId)),
    fetchEvents: () => dispatch(fetchEvents()),
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationIndex);