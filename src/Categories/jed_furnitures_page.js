import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from '../components/Navbar'; 
import Furnitures_page_navbar from '../components/Categories/furnitures_page_navbar'; 
import Furnitures_page_grid from '../components/Categories/furnitures_page_grid';
import Furnitures_page_numbers from '../components/Categories/furnitures_page_numbers'; 

class jed_furnitures_page extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Furnitures_page_navbar/>
                <div id="griddiv">
                    <Furnitures_page_grid/>
                    <Furnitures_page_numbers/>
                </div>
            </div>
        );
    }

}

export default jed_furnitures_page;