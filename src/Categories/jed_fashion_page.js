import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from '../components/Navbar'; 
import Fashion_page_navbar from '../components/Categories/fashion_page_navbar'; 
import Fashion_page_grid from '../components/Categories/fashion_page_grid';
import Fashion_page_numbers from '../components/Categories/fashion_page_numbers'; 

class jed_fashion_page extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Fashion_page_navbar/>
                <div id="griddiv">
                    <Fashion_page_grid/>
                    <Fashion_page_numbers/>
                </div>
            </div>
        );
    }

}

export default jed_fashion_page;