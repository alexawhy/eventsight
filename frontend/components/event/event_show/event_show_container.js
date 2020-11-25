import { connect } from 'react-redux';
import { fetchEvent } from '../../../actions/event_actions';
import EventShow from './event_show';

const mapStateToProps = ({ entities: {events} }, ownProps) => {
  return {
    event: events[ownProps.match.params.eventId]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);