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
              <label htmlFor="input-title">Event Title</label>
              <input 
                type="text"
                id="input-title"
                value={this.state.title}
                onChange={this.update('title')} />
            </div>
          </div>
          <div className="category">
            <div className="input-wrapper">
              <label htmlFor="input-category">Category</label>
              <select id="input-category" onChange={this.update('category_id')} value={this.state.category}>
                {categoryOptions}
              </select>
            </div>
          </div>
        </div>

      </form>
    )
  }
}

export default EventForm;