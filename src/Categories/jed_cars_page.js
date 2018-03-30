import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from '../components/Navbar'; 
import Cars_page_navbar from '../components/Categories/cars_page_navbar'; 
import Cars_page_grid from '../components/Categories/cars_page_grid';
import Cars_page_numbers from '../components/Categories/cars_page_numbers'; 

class jed_cars_page extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Cars_page_navbar/>
                <div id="griddiv">
                    <Cars_page_grid/>
                    <Cars_page_numbers/>
                </div>
            </div>
        );
    }

}

export default jed_cars_page;