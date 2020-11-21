import React from 'react'

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {}
    };
    this.fetchEvent= this.fetchEvent.bind(this);
  }

  fetchEvent(eventId) {
    $.ajax({
      url: `/api/events/${eventId}`
    }).then(event => {
      this.setState( { event } );
    });
  }
  
  componentDidMount() {
    this.fetchEvent(this.props.match.params.eventId)
  }

  render() {
    debugger
    return(
      <div>
        <h1>{this.state.event.title}</h1>
        <img src={this.state.event.imageUrl} alt=""/>
      </div>
    )
  }
}

export default EventShow;