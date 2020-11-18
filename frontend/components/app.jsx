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

const App = () => (
  <div>
    <NavContainer />
    <Switch>
      <Route exact path="/signin/signup" component={SignupFormContainer} />
      <Route exact path="/signin/login" component={LoginFormContainer} />
    </Switch>
  </div>
);

export default App;