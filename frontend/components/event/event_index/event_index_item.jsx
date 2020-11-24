import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { event } = this.props;
    this.props.history.push(`/events/${event.id}`)
  }
  
  render() {
    const { event } = this.props;
    return (
      <div className="event-index-item">
        <div className="event-index-item-image redirect">
          <img src={event.imageUrl} alt={event.title} onClick={this.handleClick} />
        </div>
        <div className="event-index-item-time">
          {event.start_date}, {event.start_time}
        </div>
        <div className="event-index-item-title redirect" onClick={this.handleClick}>
          {event.title}
        </div>
      </div>
    )
  }
}

export default withRouter(EventIndexItem);