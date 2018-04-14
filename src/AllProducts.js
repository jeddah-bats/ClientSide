import React, { Component } from 'react';
import Navbar from './components/Navbar'; 
import AllProducts_page_navbar from './components/AllProducts_page_navbar'; 
import AllProducts_page_grid from './components/AllProducts_page_grid';

class AllProducts extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <AllProducts_page_navbar data={this.props.match.params}/>
                <div id="griddiv">
                    <AllProducts_page_grid data={this.props.match.params}/>
                </div>
            </div>
        );
    }
}

export default AllProducts;