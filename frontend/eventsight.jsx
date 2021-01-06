import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import { 
  createRegistration,
  deleteRegistration,
  fetchEvents,
  fetchEvent
} from './actions/event_actions';
import {
  createBookmark, 
  deleteBookmark,
  fetchBookmarks
} from './actions/bookmark_actions';
import { fetchUser } from './actions/session_actions';

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
  window.fetchUser = fetchUser;
});