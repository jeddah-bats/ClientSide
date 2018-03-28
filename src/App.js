import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Products_page from './Products_page';
import makkah from './makkah';
import riyadh from './riyadh';
import Main from './Main';
import Loading from './components/Loading';


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
                <Switch>
                  <Route exact path='/' component={Main} />
                  <Route path='/Products_page' component={Products_page} />
                  <Route path='/Loading' component={Loading} />
                  <Route path='/makkah' component={makkah} />
                  <Route path='/riyadh' component={riyadh} />
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
