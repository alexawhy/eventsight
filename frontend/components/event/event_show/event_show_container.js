import { connect } from 'react-redux';
import { fetchEvent } from '../../../actions/event_actions';
import { openModal } from '../../../actions/modal_actions';
import EventShow from './event_show';

const mapStateToProps = ({ entities: {events} }, ownProps) => {
  return {
    event: events[ownProps.match.params.eventId]
  }
};

const mapDispatchToProps = dispatch => {
  debugger
  return {
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    openModal: (modal) => dispatch(openModal(modal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);