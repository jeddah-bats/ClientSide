import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from '../components/Navbar'; 
import Electronics_page_navbar from '../components/riyadh/Categories/electronics_page_navbar'; 
import Electronics_page_grid from '../components/riyadh/Categories/electronics_page_grid';
import Electronics_page_numbers from '../components/riyadh/Categories/electronics_page_numbers'; 

class riy_electronics_page extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Electronics_page_navbar/>
                <div id="griddiv">
                    <Electronics_page_grid/>
                    <Electronics_page_numbers/>
                </div>
            </div>
        );
    }

}

export default riy_electronics_page;