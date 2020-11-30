import { connect } from 'react-redux';
import { fetchEvents } from '../../../actions/event_actions';
import EventIndex from './event_index';

const mapStateToProps = ({ entities: { events } }) => {
  return {
    events: Object.values(events)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);