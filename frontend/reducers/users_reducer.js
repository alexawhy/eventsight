import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_BOOKMARK, REMOVE_BOOKMARK } from '../actions/bookmark_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  let nextUser;
  let nextBookmark;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(nextState, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_BOOKMARK:
      nextUser = state[action.bookmark.user_id];
      nextUser.bookmarked_events.push(action.bookmark.event_id);
      return Object.assign(nextState, { [nextUser.id]: nextUser });
    case REMOVE_BOOKMARK: 
      nextUser = state[action.bookmark.user_id];
      nextBookmark = nextUser.bookmarked_events.filter(id => id !== action.bookmark.event_id);
      nextUser.bookmarked_events = nextBookmark;
      return Object.assign(nextState, { [nextUser.id]: nextUser })
    default:
      return state;
  }
};

export default usersReducer;