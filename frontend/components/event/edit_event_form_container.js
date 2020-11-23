import React from 'react';
import { connect } from 'react-redux';
import EventForm from './event_form';
import { fetchEvent, updateEvent } from '../../actions/event_actions';

class EditEventForm extends React.Component {
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId)
      .then(() => this.setState({ event: this.props.event }))
  }

  render () {
    const { action, formType, event, imageFile } = this.props;
    if (!event) return null;

    return (
      <EventForm 
        action={action}
        formType={formType}
        event={event}
        imageFile={imageFile} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    event: state.entities.events[ownProps.match.params.eventId],
    imageFile: null,
    formType: 'Edit Event'
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    action: event => dispatch(updateEvent(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEventForm);