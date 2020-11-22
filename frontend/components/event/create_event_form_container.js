import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = state => {
  return {
    event: {
      organizer_id: '',
      category_id: '',
      title: '',
      description: '',
      venue: '',
      capacity: '',
      start_date: '', 
      start_time: '', 
      end_date: '', 
      end_time: '',
      imageUrl: null,
      imageFile: null
    },
    formType: 'Create Event',
    currentUserId: state.session.currentUserId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    action: event => dispatch(createEvent(event))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);