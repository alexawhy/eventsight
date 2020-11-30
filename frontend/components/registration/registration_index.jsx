import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import RegistrationIndexItem from './registration_index_item';

class RegistrationIndex extends React.Component {
  componentDidMount() {
    this.props.fetchRegistrations(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.events.length !== prevProps.events.length) {
      this.props.fetchRegistrations(this.props.match.params.userId);
    }
  }

  render() {
    const { events, fetchEvent, deleteRegistration, currentUser } = this.props;
    
    debugger
    const content = events.length > 0 ? (
      <ul className="user-event-index-list">
          {events.map(event => (
            <RegistrationIndexItem
              event={event}
              key={event.registration_id}
              fetchEvent={fetchEvent}
              deleteRegistration={deleteRegistration}
              currentUser={currentUser}
            />
          ))}
        </ul>
    ) : (
      <p className="message">
        Nothing here yet. <Link to="/">Find interesting events</Link> to join!
      </p>
    )
    return (
      <div className="user-event-index">
        <h1>Attending Events</h1>
        {content}
      </div>
    )
  }
}

export default withRouter(RegistrationIndex);