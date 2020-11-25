import React from 'react';
import EventIndexItem from './event_index_item'

class EventIndex extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events } = this.props;
    return (
      <div className="event-index">
        <h2>Events in <span className="blue">New York</span></h2>
        <div className="event-index-list">
          {events.map(event => (
            <EventIndexItem
              event={event}
              key={event.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default EventIndex;