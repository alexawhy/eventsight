import { connect } from 'react-redux';
import { fetchEvent } from '../../../actions/event_actions';
import { openModal } from '../../../actions/modal_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
  return {
    event: state.entities.events[ownProps.match.params.eventId],
    currentUserId: state.session.currentUserId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    openModal: (modal) => dispatch(openModal(modal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);