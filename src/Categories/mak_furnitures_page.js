import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from '../components/Navbar'; 
import Furnitures_page_navbar from '../components/makkah/Categories/furnitures_page_navbar'; 
import Furnitures_page_grid from '../components/makkah/Categories/furnitures_page_grid';
import Furnitures_page_numbers from '../components/makkah/Categories/furnitures_page_numbers'; 

class mak_furnitures_page extends Component {
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

export default mak_furnitures_page;