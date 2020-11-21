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
import EventShowContainer from './event/event_show_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <NavContainer />
    <Route exact path="/" component={Splash} />
    <Route exact path="/" component={EventIndexContainer} />
    <Switch>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <Route exact path="/events/:eventId" component={EventShowContainer} />
    </Switch>
  </div>
);

export default App;