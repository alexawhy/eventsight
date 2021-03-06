import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import NavContainer from './nav/nav_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Splash from './splash/splash';
import Footer from './footer/footer';
import EventIndexContainer from './event/event_index/event_index_container';
import EventShowContainer from './event/event_show/event_show_container';
import CreateEventFormContainer from './event/event_form/create_event_form_container';
import EditEventFormContainer from './event/event_form/edit_event_form_container';
import OrganizedEventIndexContainer from './event/organized_event_index/organized_event_index_container'
import RegistrationIndexContainer from './registration/registration_index_container';
import BookmarkIndexContainer from './bookmark/bookmark_index_container';
import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="app">
    <Modal />
    <div className="content">
      <NavContainer />
      <Route exact path="/" component={Splash} />
      <Route exact path="/" component={EventIndexContainer} />
      <Switch>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <ProtectedRoute exact path="/events/create" component={CreateEventFormContainer} />
        <ProtectedRoute exact path="/events/:eventId/edit" component={EditEventFormContainer} />
        <Route exact path="/events/:eventId" component={EventShowContainer} />
        <ProtectedRoute exact path="/users/:userId/events" component={OrganizedEventIndexContainer} />
        <ProtectedRoute exact path="/users/:userId/registrations" component={RegistrationIndexContainer} />
        <ProtectedRoute exact path="/users/:userId/bookmarks" component={BookmarkIndexContainer} />
      </Switch>
    </div>
    <Route path="/" component={Footer} />
  </div>
);

export default App;