import { RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions';
import { RECEIVE_BOOKMARKS, RECEIVE_BOOKMARK, REMOVE_BOOKMARK } from '../actions/bookmark_actions';

const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  let nextEvent;
  let nextBookmarkedUsers;
  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_EVENT:
      const newEvent = { [action.event.id]: action.event};
      return Object.assign(nextState, newEvent);
    case REMOVE_EVENT:
      delete nextState[action.eventId];
      return nextState;
    case RECEIVE_BOOKMARKS:
      return action.bookmarks;
    case RECEIVE_BOOKMARK:
      nextEvent = state[action.bookmark.event_id];
      nextEvent.bookmarked_users.push(action.bookmark.user_id);
      return Object.assign(nextState, { [nextEvent.id]: nextEvent });
    case REMOVE_BOOKMARK:
      nextEvent = state[action.bookmark.event_id];
      nextBookmarkedUsers = nextEvent.bookmarked_users.filter(userId => userId !== action.bookmark.user_id);
      nextEvent.bookmarked_users = nextBookmarkedUsers;
      return Object.assign(nextState, { [nextEvent.id]: nextEvent });
    default:
      return state;
  }
}

export default eventsReducer;