import React from 'react';
import OrganizedEventIndexItem from './organized_event_index_item';

class OrganizedEventIndex extends React.Component {
  componentDidMount() {
    this.props.fetchOrganizedEvents(this.props.match.params.userId);
  }

  render() {
    const { events, deleteEvent } = this.props;
    return (
      <div className="organized-event-index">
        <div className="organized-event-index-list">
          {events.map(event => (
            <OrganizedEventIndexItem
              event={event}
              key={event.id}
              deleteEvent={deleteEvent}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default OrganizedEventIndex;