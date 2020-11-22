import React from 'react'

class EventShow extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     event: {}
  //   };
  //   this.fetchEvent= this.fetchEvent.bind(this);
  // }

  // fetchEvent(eventId) {
  //   $.ajax({
  //     url: `/api/events/${eventId}`
  //   }).then(event => {
  //     this.setState( { event } );
  //   });
  // }
  
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId)
  }

  render() {
    const { event } = this.props;
    if (!event) return null;

    return(
      <div className="event-show-container">
        <div className="event-show-header">
          <img src={event.imageUrl} alt=""/>
          <div className="event-show-date">
            {event.start_date}
          </div>
          <h1>{event.title}</h1>
        </div>
        <div className="event-show-action">
          <button>Bookmark</button>
          <button className="register-btn">Register</button>
        </div>
        <div className="event-show-main">
          <div className="event-show-description">
            <h3>Description</h3>
            {event.description}
          </div>
          <div className="event-show-details">
            <h3>Date and Time</h3>
            {event.start_date}
            <br />
            {event.start_time} - {event.end_time}
            <h3>Location</h3>
            {event.venue}
          </div>
        </div>
      </div>
    )
  }
}

export default EventShow;