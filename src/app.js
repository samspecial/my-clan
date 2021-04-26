import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './reset.css';
import './App.css';
import SignUpPage from './pages/signup';
import DashBoard from './pages/Dashboard';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SignUpPage} />
          <Route path='/dashboard' component={DashBoard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;