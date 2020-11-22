import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faMapMarkedAlt, faCalendarAlt, faImage } from '@fortawesome/free-solid-svg-icons';
import * as eventFormUtil from '../../util/event_form_util'

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit() {

  }

  //formData

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  //render

  render() {
    // const { event } = this.state;
    const categoryOptions = eventFormUtil.categories.map((category, idx) => {
      return <option value={idx + 1} key={category}>{category}</option>
    })
    
    // debugger
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
                value={this.state.title}
                onChange={this.update('title')} />
            </div>
          </div>
          <div className="category">
            <div className="input-wrapper">
              <label htmlFor="input-category">Category <span className="red">*</span></label>
              <select id="input-category" onChange={this.update('category_id')} value={this.state.category}>
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
                value={this.state.venue}
                onChange={this.update('venue')} />
            </div>
          </div>
        </div>
        <div className="event-form-location">
          <FontAwesomeIcon className="form-icon" icon={faCalendarAlt} />
          <h2>Date and time</h2>
          <p>
            Tell event-goers when your event starts and ends so they can make plans to attend.
          </p>
          <div className="start_date">
            <div className="input-wrapper">
              <label htmlFor="input-start_date">Event Starts <span className="red">*</span></label>
              <input 
                type="date"
                id="input-start_date"
                value={this.state.start_date}
                onChange={this.update('start_date')} />
            </div>
          </div>
        </div>

      </form>
    )
  }
}

export default EventForm;