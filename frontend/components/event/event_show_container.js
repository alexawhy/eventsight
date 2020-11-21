import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_actions';
import EventShow from './event_show';

const matchStateToProps = ({ entities: {events} }, ownProps) => {
  return {
    event: events[ownProps.match.params.eventId]
  }
};

const matchDispatchToProps = dispatch => {
  return {
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(EventShow);