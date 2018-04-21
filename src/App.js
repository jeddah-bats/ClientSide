import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Categories from './Categories';
import Statistics from './Statistics';
import DatePro from './Date';
import AllProducts from './AllProducts';
import NotFound from './components/NotFound';
import searcresults_page from './searcresults_page';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var info = require("./infomain.js");

class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <div>
                <Switch>
                  <Route exact path='/' render={() => <Main data={info.var[0]} />}/>
                  <Route path='/مكة' render={() => <Main data={info.var[1]} />}/>                  
                  <Route path='/الرياض' render={() => <Main data={info.var[2]} />}/>
                  <Route path='/النتائج/:city/:searchfailed' component={searcresults_page} />
                  <Route path='/جميع المنتجات/:city' component={AllProducts} />
                  <Route path='/احصائيات/:city' component={Statistics} />
                  <Route path='/التاريخ/:city' component={DatePro} />
                  <Route path='/:cate/:city' component={Categories} />
                  <Route path='/NotFound' component={NotFound} />

                  <Route render={function() {
                    return <NotFound/> }} />
                </Switch>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
