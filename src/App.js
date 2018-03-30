import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import makkah from './makkah';
import riyadh from './riyadh';
import Main from './Main';
import Loading from './components/Loading';

import jed_cars_page from './Categories/jed_cars_page';
import jed_electronics_page from './Categories/jed_electronics_page';
import jed_furnitures_page from './Categories/jed_furnitures_page';
import jed_video_games_page from './Categories/jed_video_games_page';
import jed_fashion_page from './Categories/jed_fashion_page';
import jed_Date_page from './Features/jed_Date_page';
import jed_products_page from './Features/jed_products_page';
import mak_cars_page from './Categories/mak_cars_page';
import mak_electronics_page from './Categories/mak_electronics_page';
import mak_furnitures_page from './Categories/mak_furnitures_page';
import mak_video_games_page from './Categories/mak_video_games_page';
import mak_fashion_page from './Categories/mak_fashion_page';
import mak_Date_page from './Features/mak_Date_page';
import mak_products_page from './Features/mak_products_page';
import riy_cars_page from './Categories/riy_cars_page';
import riy_electronics_page from './Categories/riy_electronics_page';
import riy_furnitures_page from './Categories/riy_furnitures_page';
import riy_video_games_page from './Categories/riy_video_games_page';
import riy_fashion_page from './Categories/riy_fashion_page';
import riy_Date_page from './Features/riy_Date_page';
import riy_products_page from './Features/riy_products_page';

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
                  <Route path='/Loading' component={Loading} />
                  <Route path='/makkah' component={makkah} />
                  <Route path='/riyadh' component={riyadh} />
                  <Route path='/jed/cars' component={jed_cars_page} />
                  <Route path='/jed/electronics' component={jed_electronics_page} />
                  <Route path='/jed/furnitures' component={jed_furnitures_page} />
                  <Route path='/jed/video-games' component={jed_video_games_page} />
                  <Route path='/jed/fashion' component={jed_fashion_page} />
                  <Route path='/jed/date' component={jed_Date_page} />
                  <Route path='/jed/products' component={jed_products_page} />
                  <Route path='/mak/cars' component={mak_cars_page} />
                  <Route path='/mak/electronics' component={mak_electronics_page} />
                  <Route path='/mak/furnitures' component={mak_furnitures_page} />
                  <Route path='/mak/video-games' component={mak_video_games_page} />
                  <Route path='/mak/fashion' component={mak_fashion_page} />
                  <Route path='/mak/date' component={mak_Date_page} />
                  <Route path='/mak/products' component={mak_products_page} />
                  <Route path='/riy/cars' component={riy_cars_page} />
                  <Route path='/riy/electronics' component={riy_electronics_page} />
                  <Route path='/riy/furnitures' component={riy_furnitures_page} />
                  <Route path='/riy/video-games' component={riy_video_games_page} />
                  <Route path='/riy/fashion' component={riy_fashion_page} />
                  <Route path='/riy/date' component={riy_Date_page} />
                  <Route path='/riy/products' component={riy_products_page} />
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
