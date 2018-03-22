import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

import cities from './citypage';
import Main from './Main.js';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <div>
                <div> <Navbar/> </div>
                <Switch>
                  <Route exact path='/' component={Main} />
                  <Route path='/citypage' component={cities} />
                  <Route render={function() {
                    return <NotFound/>
                  }} />
                </Switch>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
