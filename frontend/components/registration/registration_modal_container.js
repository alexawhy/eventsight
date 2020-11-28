import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createRegistration } from '../../actions/event_actions';
import { closeModal } from '../../actions/modal_actions';
import RegistrationModal from './registration_modal';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    currentUserId: state.session.currentUserId,
    event: state.entities.events[ownProps.location.pathname.split('/').reverse()[0]]
  }
}

const mapDispatchToProps = dispatch => {
  debugger
  return {
    createRegistration: (eventId) => dispatch(createRegistration(eventId)),
    closeModal: () => dispatch(closeModal())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistrationModal));