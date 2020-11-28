import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createRegistration } from '../../actions/event_actions';
import { closeModal } from '../../actions/modal_actions';
import RegistrationModal from './registration_modal'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.currentUserId,
    eventId: ownProps.match.params.eventId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createRegistration: (eventId) => dispatch(createRegistration(eventId)),
    closeModal: () => dispatch(closeModal())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps(RegistrationModal)));