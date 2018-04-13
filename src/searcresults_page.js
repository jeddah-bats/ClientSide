import React, { Component } from 'react';
import Navbar from './components/Navbar'; 
import searchresults_page_navbar from './components/searchresults_page_navbar'; 
import searchresults_page_grid from './components/searchresults_page_grid';

class searcresults_page extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <searchresults_page_navbar/>
                <div id="griddiv">
                    <searchresults_page_grid/>
                </div>
            </div>
        );
    }

}

export default searcresults_page;