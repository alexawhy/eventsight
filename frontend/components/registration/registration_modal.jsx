import React from 'react';
import { withRouter } from 'react-router-dom';
import RegistrationModalTime from './registration_modal_time_component'

class RegistrationModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createRegistration(this.props.event.id)
      .then(this.props.closeModal);
  }

  render() {
    const { event } = this.props;

    return (
      <div className="registration-modal">
        <div className="left">
          <div className="registration-header">
            <h2>{event.title}</h2>
            <RegistrationModalTime event={event}/>
          </div>
          <div className="registration-details">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
          <div>
            <button className="register-btn" onclick={this.handleSubmit}>Register</button>
          </div>
        </div>
        <div className="right">
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