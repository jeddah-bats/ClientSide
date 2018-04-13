import React, { Component } from 'react';
import Navbar from './components/Navbar'; 
import Categories_page_navbar from './components/Categories_page_navbar'; 
import Categories_page_grid from './components/Categories_page_grid';

class Categories extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Categories_page_navbar data={this.props.match.params}/>
                <div id="griddiv">
                    <Categories_page_grid data={this.props.match.params}/>
                </div>
            </div>
        );
    }
}

export default Categories;