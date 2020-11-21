import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import { asArray } from '../../reducers/selectors';
import EventIndex from './event_index';

const matchStateToProps = ({ entities: {events} }) => {
  return {
    events: Object.values(events)
  }
};

const matchDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(EventIndex);