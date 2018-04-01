import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from './components/Navbar'; 
import searchresults_page_navbar from './components/searchresults_page_navbar'; 
import searchresults_page_grid from './components/searchresults_page_grid';
import searchresults_page_numbers from './components/searchresults_page_numbers'; 

class searcresults_page extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <searchresults_page_navbar/>
                <div id="griddiv">
                    <searchresults_page_grid/>
                    <searchresults_page_numbers/>
                </div>
            </div>
        );
    }

}

export default searcresults_page;