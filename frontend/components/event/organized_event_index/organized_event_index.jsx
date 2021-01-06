import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import OrganizedEventIndexItem from './organized_event_index_item';

class OrganizedEventIndex extends React.Component {
  componentDidMount() {
    this.props.fetchOrganizedEvents(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.events.length !== prevProps.events.length) {
      this.props.fetchOrganizedEvents(this.props.match.params.userId);
    }
  }

  render() {
    const { events, fetchEvent, deleteEvent, currentUser } = this.props;

    const content = events.length > 0 ? (
      <ul className="user-event-index-list">
          {events.map((event, idx) => (
            <OrganizedEventIndexItem
              event={event}
              key={idx}
              fetchEvent={fetchEvent}
              deleteEvent={deleteEvent}
              currentUser={currentUser}
            />
          ))}
        </ul>
    ) : (
      <p className="message">
        Nothing here yet. Why not <Link to="/events/create">create your own event!</Link>
      </p>
    )
    return (
      <div className="user-event-index">
        <h1>Events Organized</h1>
        {content}
      </div>
    )
  }
}

export default withRouter(OrganizedEventIndex);