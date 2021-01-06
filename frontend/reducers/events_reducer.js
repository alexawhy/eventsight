import { 
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  REMOVE_EVENT
} from '../actions/event_actions';
import {
  RECEIVE_BOOKMARKS
} from '../actions/bookmark_actions';

const eventsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_EVENT:
      const newEvent = { [action.event.id]: action.event};
      return Object.assign({}, state, newEvent)
    case REMOVE_EVENT:
      let nextState = Object.assign({}, state);
      delete nextState[action.eventId];
      return nextState;
    case RECEIVE_BOOKMARKS:
      return action.bookmarks;
    default:
      return state;
  }
}

export default eventsReducer;