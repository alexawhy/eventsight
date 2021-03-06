import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAlignLeft, 
  faMapMarkedAlt, 
  faCalendarAlt, 
  faImage, 
  faUserFriends 
} from '@fortawesome/free-solid-svg-icons';
import * as eventFormUtil from '../../../util/event_form_util';
import Error from '../../helper_components/error_message';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currEvent: this.props.event,
      imageFile: null,
      tempImageUrl: null,
      submitted: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.toggleOnline = this.toggleOnline.bind(this);
    this.toggleOffline = this.toggleOffline.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    this.setState({ submitted: true });
    formData.append('event[organizer_id]', this.props.currentUserId);
    formData.append('event[category_id]', this.state.currEvent.category_id);
    formData.append('event[title]', this.state.currEvent.title);
    formData.append('event[description]', this.state.currEvent.description);
    formData.append('event[online]', this.state.currEvent.online);
    formData.append('event[venue]', this.state.currEvent.venue);
    formData.append('event[capacity]', this.state.currEvent.capacity);
    formData.append('event[start_date]', this.state.currEvent.start_date);
    formData.append('event[start_time]', this.state.currEvent.start_time);
    formData.append('event[end_date]', this.state.currEvent.end_date);
    formData.append('event[end_time]', this.state.currEvent.end_time);
    if (this.state.imageFile) {
      formData.append('event[image]', this.state.imageFile);
    } 
    this.props.action(formData, this.state.currEvent.id).then(
      (payload) => {
        this.props.history.push(`/events/${payload.event.id}`)
      });
  }
  
  handleFile(e) {
    const image = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: image, tempImageUrl: fileReader.result })
    }

    if (image) {
      fileReader.readAsDataURL(image);
    } else {
      this.setState({ imageFile: null, tempImageUrl: "" });
    }
  }

  handleInput(field) {
    return e => {
      let nextEvent = Object.assign({}, this.state.currEvent);
      nextEvent[field] = e.currentTarget.value;
      this.setState({ currEvent: nextEvent });
    };
  }

  toggleOnline() {
    let nextEvent = Object.assign({}, this.state.currEvent);
    nextEvent.online = true;
    this.setState({ currEvent: nextEvent });
  }

  toggleOffline() {
    let nextEvent = Object.assign({}, this.state.currEvent);
    nextEvent.online = false;
    this.setState({ currEvent: nextEvent });
  }

  handleErrors() {
    let formErrors = {};
    if (this.props.errors === "") return;
    this.props.errors.map((error) => {
      const field = error.split(" ")[0];
      formErrors[field] = error;
    })
    return formErrors;
  }

  componentWillUnmount() {
    this.props.clearEventErrors();
  }

  render() {
    const { currEvent, submitted } = this.state;

    let formErrors = this.handleErrors();
    let titleError = formErrors["Title"] ? <Error msg="Title is required"/> : "" ;
    let categoryError = formErrors["Category"] ? <Error msg="Category is required"/> : "" ;
    let capacityError = formErrors["Capacity"] ? <Error msg="Capacity is required"/> : "" ;
    let startDateError = formErrors["Start"] ? <Error msg="Start date is required"/> : "" ;
    let endDateError = formErrors["End"] ? <Error msg="End date is required"/> : "" ;
    let imageError = formErrors["Image"] ? <Error msg="Image is required"/> : "" ;
    let descriptionError = formErrors["Description"] ? <Error msg="Description is required"/> : "" ;
    let venueError = submitted && !currEvent.online && currEvent.venue === "" 
      ? <Error msg="Venue location is required"/>
      : "" ;

    const categoryOptions = eventFormUtil.categories.map((category, idx) => {
      return(
      <option 
        value={idx + 1} 
        key={category}>
        {category}
      </option>) 
    })

    const isOnline = currEvent.online === true ? 'selected' : '';
    const isOffline = currEvent.online === false? 'selected' : '';

    const venueInput = (
      <div className="venue">
        <div className="input-wrapper">
          <label htmlFor="input-venue">
            Venue Location <span className="red">*</span>
          </label>
          <input 
            type="text"
            id="input-venue"
            value={currEvent.venue}
            onChange={this.handleInput('venue')} />
        </div>
        {venueError}
      </div>
    )

    const imagePreview = this.state.tempImageUrl 
      ? <img src={this.state.tempImageUrl}></img> 
      : <img src={this.state.currEvent.imageUrl}></img>;
    
    return (
      <form className="event-form" onSubmit={this.handleSubmit}>
        <div className="event-form-basic-info form-section">
          <div className="left">
            <FontAwesomeIcon className="form-icon" icon={faAlignLeft} size="3x"/>
          </div>
          <div className="right">
            <h2>Basic Info</h2>
            <p>
              Name your event and tell event-goers why they should come. 
              Add details that highlight what makes it unique.
            </p>
            <div className="title">
              <div className="input-wrapper">
                <label htmlFor="input-title">
                  Event Title <span className="red">*</span>
                </label>
                <input 
                  type="text"
                  id="input-title"
                  value={currEvent.title}
                  onChange={this.handleInput('title')} />
              </div>
              {titleError}
            </div>
            <div className="category">
              <div className="input-wrapper">
                <select 
                  id="input-category" 
                  value={currEvent.category_id} 
                  onChange={this.handleInput('category_id')}>
                  <option value="">Category </option>
                  {categoryOptions}
                </select>
              </div>
              {categoryError}
            </div>
          </div>
        </div>
        <div className="event-form-location form-section">
          <div className="left">
          <FontAwesomeIcon className="form-icon" icon={faMapMarkedAlt} size="3x" />
          </div>
          <div className="right">
            <h2>Location</h2>
            <p>
              Help people in the area discover your event and let attendees know where to show up.
            </p>
            <div className="flex-row location-selector" >
              <div 
                className={`location-btn ${isOffline}`} 
                onClick={this.toggleOffline}>
                Venue
              </div>
              <div 
                className={`location-btn ${isOnline}`} 
                onClick={this.toggleOnline}>
                Online Event
              </div>
            </div>
            <div>
              {this.state.currEvent.online ? '' : venueInput}
            </div>
          </div>
        </div>
        <div className="event-form-capacity form-section">
          <div className="left">
            <FontAwesomeIcon className="form-icon" icon={faUserFriends} size="3x" />
          </div>
          <div className="right">
            <h2>Capacity</h2>
            <p>Tell us how many attendees can register at maximum.</p>
            <div className="capacity">
              <div className="input-wrapper">
                <label htmlFor="input-capacity">
                  Event capacity <span className="red">*</span>
                </label>
                <input
                type="number"
                id="input-capacity"
                min="1"
                value={currEvent.capacity}
                onChange={this.handleInput('capacity')} />
              </div>
              {capacityError}
            </div>
          </div>
        </div>
        <div className="event-form-location form-section">
          <div className="left">
          <FontAwesomeIcon className="form-icon" icon={faCalendarAlt} size="3x" />
          </div>
          <div className="right">
            <h2>Date and time</h2>
            <p>
              Tell event-goers when your event starts and ends so they can make plans to attend.
            </p>
            <div className="flex-row">
              <div className="start-date">
                <div className="input-wrapper">
                  <label htmlFor="input-start-date">
                    Event Starts <span className="red">*</span>
                  </label>
                  <input 
                    type="date"
                    id="input-start-date"
                    value={currEvent.start_date}
                    onChange={this.handleInput('start_date')} />
                </div>
                {startDateError}
              </div>
              <div className="start-time">
                <div className="input-wrapper">
                  <label htmlFor="input-start-time">Start Time</label>
                  <input 
                    type="time"
                    id="input-start-time"
                    value={currEvent.start_time}
                    onChange={this.handleInput('start_time')} />
                </div>
              </div>
            </div>
            <div className="flex-row">
              <div className="end-date">
                <div className="input-wrapper">
                  <label htmlFor="input-end-date">
                    Event Ends <span className="red">*</span>
                  </label>
                  <input 
                    type="date"
                    id="input-end-date"
                    value={currEvent.end_date}
                    min={currEvent.start_date}
                    onChange={this.handleInput('end_date')} />
                </div>
                {endDateError}
              </div>
              <div className="end-time">
                <div className="input-wrapper">
                  <label htmlFor="input-end-time">End Time</label>
                  <input 
                    type="time"
                    id="input-end-time"
                    value={currEvent.end_time}
                    onChange={this.handleInput('end_time')} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="event-form-image form-section">
          <div className="left">
            <FontAwesomeIcon className="form-icon" icon={faImage} size="3x" />
          </div>
          <div className="right">
            <h2>Main Event Image</h2>
            <p>This is the first image attendees will see at the top of your listing. Use a high quality image: 2160x1080px (2:1 ratio).</p>
            <div className="image">
              <input 
                type="file"
                onChange={this.handleFile}/>
            </div>
            <div className="image-preview">
              <h3>Image Preview</h3>
              <div className="image-box">
                {imagePreview}
              </div>
            </div>
            {imageError}
          </div>
        </div>
        <div className="event-form-description form-section">
          <div className="left">
            <FontAwesomeIcon className="form-icon" icon={faAlignLeft} size="3x" />
          </div>
          <div className="right">
            <h2>Description</h2>
            <p>Add more details to your event like your schedule, sponsors, or featured guests.</p>
            <div className="description">
              <div className="input-wrapper">
                <label htmlFor="input-description">
                  Event Description <span className="red">*</span>
                </label>
                <textarea
                  id="input-description"
                  value={currEvent.description}
                  onChange={this.handleInput('description')} />
              </div>
              {descriptionError}
            </div>
          </div>
        </div>
        <button className="submit-btn">{this.props.formType}</button>
      </form>
    )
  }
}

export default EventForm;