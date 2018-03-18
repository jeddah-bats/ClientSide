import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider';
import Features from './components/Features';
import SearchCity from './components/SearchCity';
import HotProducts from './components/HotProducts';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Search from './components/Search';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Slider/>
          <Search/>
        </div>
        <div id="center">
          <SearchCity/>
        </div>
        
        <div id="fea">
          <Features/>
        </div>
        <div id="hot">
          <HotProducts/>
        </div>
        <div>
          <Categories/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;