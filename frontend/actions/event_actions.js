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
}

export const fetchEvent = eventId => dispatch => {
  return EventAPIUtil.fetchEvent(eventId)
    .then(event => dispatch(receiveEvent(event)))
}

export const createEvent = event => dispatch => {
  return EventAPIUtil.createEvent(event)
    .then(event => {
      return dispatch(receiveEvent(event))
    }, error => {
      return dispatch(receiveEventErrors(error.responseJSON))
    })
}

export const updateEvent = (event, eventId) => dispatch => {
  return EventAPIUtil.updateEvent(event, eventId)
    .then(event => {
      return dispatch(receiveEvent(event))
    }, error => {
      return dispatch(receiveEventErrors(error.responseJSON))
    })
}

export const deleteEvent = eventId => dispatch => {
  return EventAPIUtil.deleteEvent(eventId)
    .then(() => dispatch(removeEvent(eventId)))
}

export const clearEventErrors = () => dispatch => {
  return dispatch(removeEventErrors())
}

export const fetchOrganizedEvents = userId => dispatch => {
  return EventAPIUtil.fetchOrganizedEvents(userId)
    .then(events => dispatch(receiveEvents(events)))
}

export const createRegistration = eventId => dispatch => {
  return EventAPIUtil.createRegistration(eventId)
    .then(event => dispatch(receiveEvent(event)))
}

export const deleteRegistration = (eventId, registrationId) => {
  return EventAPIUtil.deleteRegistration(eventId, registrationId)
    .then(events => {
      dispatch(receiveEvents(events))
    })
}

export const fetchRegistrations = userId => dispatch => {
  return EventAPIUtil.fetchRegistrations(userId)
    .then(events => dispatch(receiveEvents(events)))
}

export const createBookmark = eventId => dispatch => {
  return EventAPIUtil.createBookmark(eventId)
    .then(events => dispatch(receiveEvent(events)))
}

export const deleteBookmark = eventId => dispatch => {
  return EventAPIUtil.deleteBookmark(eventId)
  .then(events => dispatch(receiveEvents(events)))
}

export const fetchBookmarks = userId => dispatch => {
  return EventAPIUtil.fetchBookmarks(userId)
    .then(events => dispatch(receiveEvents(events)))
}