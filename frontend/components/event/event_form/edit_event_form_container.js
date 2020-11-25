import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EventForm from './event_form';
import { fetchEvent, updateEvent, clearEventErrors } from '../../../actions/event_actions';

class EditEventForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchEvent(this.props.match.params.eventId)
      .then(() => this.setState({ event: this.props.event }))
  }

  render () {
    const { action, formType, event, imageFile, errors, clearEventErrors } = this.props;
    if (!event) return null;

    return (
      <EventForm 
        action={action}
        formType={formType}
        event={event}
        imageFile={imageFile} 
        history={this.props.history}
        errors={errors}
        clearEventErrors={clearEventErrors}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    event: state.entities.events[ownProps.match.params.eventId],
    imageFile: null,
    formType: 'Edit Event',
    errors: state.errors.event, 
    currentUserId: state.session.currentUserId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    action: (formData, eventId)  => dispatch(updateEvent(formData, eventId)),
    clearEventErrors: () => dispatch(clearEventErrors())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditEventForm));