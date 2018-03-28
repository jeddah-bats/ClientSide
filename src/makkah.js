import React, { Component } from 'react';
import './App.css';
import Features from './components/Features';
import Hero from './components/makkah/Hero';
import HotProducts from './components/makkah/HotProducts';
import Categories from './components/makkah/Categories';
import SearchCity from './components/makkah/SearchCity';
import Footer from './components/makkah/Footer';

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
