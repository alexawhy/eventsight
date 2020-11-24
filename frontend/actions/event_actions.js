import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const REMOVE_EVENT_ERRORS = 'REMOVE_EVENT_ERRORS';

const receiveEvents = events => {
  return {
    type: RECEIVE_EVENTS,
    events
  }
};

const receiveEvent = event => {
  return {
    type: RECEIVE_EVENT,
    event
  }
};

const removeEvent = eventId => {
  return {
    type: REMOVE_EVENT,
    eventId
  }
};

const receiveEventErrors = errors => {
  return {
    type: RECEIVE_EVENT_ERRORS,
    errors
  }
}
const removeEventErrors = () => {
  return {
    type: REMOVE_EVENT_ERRORS
  }
}

export const fetchEvents = () => dispatch => {
  return EventAPIUtil.fetchEvents()
    .then(events => dispatch(receiveEvents(events)))
};

export const fetchEvent = eventId => dispatch => {
  return EventAPIUtil.fetchEvent(eventId)
    .then(event => dispatch(receiveEvent(event)))
};

export const createEvent = event => dispatch => {
  return EventAPIUtil.createEvent(event)
    .then(event => {
      dispatch(receiveEvent(event))
    }, error => {
      dispatch(receiveEventErrors(error.responseJSON))
    })
};

export const updateEvent = event => dispatch => {
  return EventAPIUtil.updateEvent(event, event.id)
    .then(event => {
      dispatch(receiveEvent(event))
    }, error => {
      dispatch(receiveEventErrors(error.responseJSON))
    })
};

export const deleteEvent = eventId => dispatch => {
  return EventAPIUtil.deleteEvent(eventId)
    .then(() => dispatch(removeEvent(eventId)))
};

export const clearEventErrors = () => dispatch => {
  return dispatchEvent(removeEventErrors())
}; 