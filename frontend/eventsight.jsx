import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import { 
  createBookmark, 
  deleteBookmark,
  fetchBookmarks,
  createRegistration,
  deleteRegistration,
  fetchEvents,
  fetchEvent
} from './actions/event_actions';
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createBookmark = createBookmark;
  window.deleteBookmark = deleteBookmark;
  window.fetchBookmarks = fetchBookmarks;
  window.createRegistration = createRegistration;
  window.deleteRegistration = deleteRegistration;
  window.fetchEvents = fetchEvents;
  window.fetchEvent = fetchEvent;
});