import React, { Component } from 'react';
import './App.css';
import Features from './components/Features';
import Hero from './components/Hero';
import HotProducts from './components/HotProducts';
import Categories from './components/Categories';
import SearchCity from './components/SearchCity';
import Footer from './components/Footer';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class Proudct extends Component {
  
  render() {
    return (
      <div>
        <div> <Hero/> </div>
        <div> <SearchCity data={this.props.data}/> </div>
        <div> <Features data={this.props.data}/> </div>
        <div> <HotProducts data={this.props.data}/> </div>
        <div> <Categories data={this.props.data}/> </div>
        <div> <Footer/> </div>
      </div>
      
    );
  }
}

export default Proudct;
