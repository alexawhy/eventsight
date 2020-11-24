import { connect } from 'react-redux';
import { createEvent } from '../../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = state => {
  return {
    event: {
      organizer_id: '',
      category_id: '',
      title: '',
      description: '',
      online: false,
      venue: '',
      capacity: '',
      start_date: '', 
      start_time: '', 
      end_date: '', 
      end_time: '',
      imageUrl: null                                                                                                                                       
    },
    currentUserId: state.session.currentUserId,
    imageFile: null,
    formType: 'Create Event',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  }
};

const mapDispatchToProps = dispatch => {
  return {
    action: formData => dispatch(createEvent(formData))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);