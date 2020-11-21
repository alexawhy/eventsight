import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import NavContainer from './nav/nav_container'
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import Splash from './splash/splash'
import EventIndexContainer from './event/event_index_container'
import EventShow from './event/event_show'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <NavContainer />
    <Switch>
      <Route exact path="/" component={Splash} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <Route exact path="/events" component={EventIndexContainer} />
      <Route exact path="/events/:eventId" component={EventShow} />
    </Switch>
  </div>
);

export default App;