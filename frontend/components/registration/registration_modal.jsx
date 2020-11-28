import React from 'react';
import { withRouter } from 'react-router-dom';
import RegistrationModalTime from './registration_modal_time_component'

class RegistrationModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    this.props.createRegistration(this.props.event.id)
      .then(this.props.closeModal);
  }

  handleRedirect(e) {
    debugger
    e.preventDefault();
    this.props.closeModal();
    this.props.history.push('/signup');
  }

  render() {
    const { event, closeModal, currentUserId } = this.props;

    const actionButton = currentUserId ? 
      <button className="register-btn button" onClick={this.handleSubmit}>Register</button> : 
      <button className="redirect-btn button" onClick={this.handleRedirect}>Sign up or Log in to Register</button>;

    debugger 
    return (
      <div className="registration-modal">
        <div className="left">
          <div className="registration-header">
            <h2>{event.title}</h2>
            <RegistrationModalTime event={event}/>
          </div>
          <div className="registration-details">
            <h2>{event.title}</h2>
            <p>{event.description.split('. ').slice(0, 5).join('. ')}.</p>
          </div>
          <div className="registration-footer">
            {actionButton}
          </div>
        </div>
        <div className="right">
          <div className="close-modal" onClick={() => closeModal()}>&times;</div>
          <div className="modal-image">
            <img src={event.imageUrl} alt=""/>
          </div>
          <div className="order-summary">
            <h3>Order summary</h3>
            <div className="order-breakdown">
              <p>1 x {event.title}</p>
              <p>$0.00</p>
            </div>
            <div className="order-total">
              <p>Total</p>
              <p>$0.00</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(RegistrationModal);