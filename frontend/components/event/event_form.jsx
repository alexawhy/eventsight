import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faMapMarkedAlt, faCalendarAlt, faImage, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import * as eventFormUtil from '../../util/event_form_util'

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currEvent: this.props.event,
      imageFile: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }
  
  handleSubmit() {
    
  }

  handleFile(e) {

  }

  //formData

  update(field) {
    // debugger
    return e => {
      let nextEvent = Object.assign({}, this.state.currEvent);
      nextEvent[field] = e.currentTarget.value;
      this.setState({ currEvent: nextEvent})
    };
  }

  render() {
    const { currEvent } = this.state;

    const categoryOptions = eventFormUtil.categories.map((category, idx) => {
      return(
      <option 
        value={idx + 1} 
        key={category}>
        {category}
      </option>) 
    })
    
    debugger
    return (
      <form className="event-form">
        <div className="event-form-basic-info">
          <FontAwesomeIcon className="form-icon" icon={faAlignLeft} />
          <h2>Basic Info</h2>
          <p>
            Name your event and tell event-goers why they should come. 
            Add details that highlight what makes it unique.
          </p>
          <div className="title">
            <div className="input-wrapper">
              <label htmlFor="input-title">Event Title <span className="red">*</span></label>
              <input 
                type="text"
                id="input-title"
                value={currEvent.title}
                onChange={this.update('title')} />
            </div>
          </div>
          <div className="category">
            <div className="input-wrapper">
              {/* <label htmlFor="input-category">Category <span className="red">*</span></label> */}
              <select id="input-category" value={event.category_id} defaultValue={event.category_id} onChange={this.update('category_id')}>
                <option disabled>Category</option>
                {categoryOptions}
              </select>
            </div>
          </div>
        </div>
        <div className="event-form-location">
          <FontAwesomeIcon className="form-icon" icon={faMapMarkedAlt} />
          <h2>Venue</h2>
          <p>
            Help people in the area discover your event and let attendees know where to show up.
          </p>
          <div className="venue">
            <div className="input-wrapper">
              <label htmlFor="input-venue">Venue <span className="red">*</span></label>
              <input 
                type="text"
                id="input-venue"
                value={currEvent.venue}
                onChange={this.update('venue')} />
            </div>
          </div>
        </div>
        <div className="event-form-capacity">
          <FontAwesomeIcon className="form-icon" icon={faUserFriends} />
          <h2>Capacity</h2>
          <p>Tell us how many attendees can register at maximum.</p>
          <div className="capacity">
            <div className="input-wrapper">
              <label htmlFor="input-capacity">Event capacity <span className="red">*</span></label>
              <input
              type="number"
              id="input-capacity"
              value={currEvent.capacity}
              onChange={this.update('capacity')} />
            </div>
          </div>
        </div>
        <div className="event-form-location">
          <FontAwesomeIcon className="form-icon" icon={faCalendarAlt} />
          <h2>Date and time</h2>
          <p>
            Tell event-goers when your event starts and ends so they can make plans to attend.
          </p>
          <div className="start">
            <div className="input-wrapper start-date">
              <label htmlFor="input-start-date">Event Starts <span className="red">*</span></label>
              <input 
                type="date"
                id="input-start-date"
                value={currEvent.start_date}
                onChange={this.update('start_date')} />
            </div>
            <div className="input-wrapper start-time">
              <label htmlFor="input-start-time">Start Time</label>
              <input 
                type="time"
                id="input-start-time"
                value={currEvent.start_time}
                onChange={this.update('start_time')} />
            </div>
          </div>
          <div className="end">
            <div className="input-wrapper end-date">
              <label htmlFor="input-end-date">Event Ends <span className="red">*</span></label>
              <input 
                type="date"
                id="input-end-date"
                value={currEvent.end_date}
                onChange={this.update('end_date')} />
            </div>
            <div className="input-wrapper end-time">
              <label htmlFor="input-end-time">End Time</label>
              <input 
                type="time"
                id="input-end-time"
                value={currEvent.end_time}
                onChange={this.update('end_time')} />
            </div>
          </div>
        </div>
        <div className="event-form-image">
          <FontAwesomeIcon className="form-icon" icon={faImage} />
          <h2>Main Event Image</h2>
          <p>This is the first image attendees will see at the top of your listing. Use a high quality image: 2160x1080px (2:1 ratio).</p>
          <div className="image">
            <input 
              type="file"
               />
          </div>
        </div>
        <div className="event-form-description">
          <FontAwesomeIcon className="form-icon" icon={faAlignLeft} />
          <h2>Description</h2>
          <p>Add more details to your event like your schedule, sponsors, or featured guests.</p>
          <div className="description">
            <div className="input-wrapper">
              <label htmlFor="input-description">Event Description <span className="red">*</span></label>
              <textarea
                id="input-description"
                value={currEvent.description}
                onChange={this.update('description')} />
            </div>
          </div>
        </div>
        <button>{this.props.formType}</button>
      </form>
    )
  }
}

export default EventForm;