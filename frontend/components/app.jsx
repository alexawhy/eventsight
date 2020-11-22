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
import EventIndexContainer from './event/event_index_container';
import EventShowContainer from './event/event_show_container';
import createEventFormContainer from './event/create_event_form_container';
import EditEventFormContainer from './event/edit_event_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <NavContainer />
    <Route exact path="/" component={Splash} />
    <Route exact path="/" component={EventIndexContainer} />
    <Switch>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute exact path="/events/create" component={createEventFormContainer} />
      <Route exact path="/events/:eventId" component={EventShowContainer} />
    </Switch>
    <Route exact path="/" component={Footer} />
    <Route exact path="/events/:eventId" component={Footer} />
  </div>
);

export default App;