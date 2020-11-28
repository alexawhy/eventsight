import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { event } = this.props;
    this.props.history.push(`/events/${event.id}`);
  }
  
  render() {
    const { event } = this.props;
    const datetime = event.start_time ? <p>{event.start_date}, {event.start_time}</p> : <p>{event.start_date}</p>;
    
    return (
      <div className="event-index-item">
        <div className="event-index-item-image redirect">
          <img src={event.imageUrl} alt={event.title} onClick={this.handleClick} />
        </div>
        <div className="event-index-item-time">
          {datetime}
        </div>
        <div className="event-index-item-title redirect" onClick={this.handleClick}>
          {event.title}
        </div>
      </div>
    )
  }
}

export default withRouter(EventIndexItem);