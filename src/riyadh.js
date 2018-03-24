import React, { Component } from 'react';
import './App.css';
import Features from './components/Features';
import Hero from './components/riyadh/Hero';
import HotProducts from './components/riyadh/HotProducts';
import Categories from './components/riyadh/Categories';
import SearchCity from './components/riyadh/SearchCity';
import Footer from './components/riyadh/Footer';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class Proudct extends Component {
  render() {
    return (
      <div>
        <div> <Hero/> </div>
        <div> <SearchCity/> </div>
        <div> <Features/> </div>
        <div> <HotProducts/> </div>
        <div> <Categories/> </div>
        <div> <Footer/> </div>
        

      </div>
      
    );
  }
}

export default Proudct;
