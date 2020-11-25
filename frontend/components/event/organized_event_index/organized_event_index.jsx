import React from 'react';
import { withRouter } from 'react-router-dom';
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
    return (
      <div className="organized-event-index">
        <h1>Events Organized</h1>
        <div className="organized-event-index-list">
          {events.map(event => (
            <OrganizedEventIndexItem
              event={event}
              key={event.id}
              fetchEvent={fetchEvent}
              deleteEvent={deleteEvent}
              currentUser={currentUser}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(OrganizedEventIndex);