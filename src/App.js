import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Grid from './components/Grid';
import SearchCity from './components/SearchCity';
import HotProducts from './components/HotProducts';
import Categories from './components/Categories';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header/>
        </div>
        <div>
          <SearchCity/>
        </div>
        <div>
          <Grid/>
        </div>
        <div>
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
