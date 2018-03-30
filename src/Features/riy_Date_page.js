import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from '../components/Navbar'; 
import Date_page_navbar from '../components/riyadh/Features/Date_page_navbar'; 
import Date_page_grid from '../components/riyadh/Features/Date_page_grid';
import Date_page_numbers from '../components/riyadh/Features/Date_page_numbers'; 

class riy_Date_page extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Date_page_navbar/>
                <div id="griddiv">
                    <Date_page_grid/>
                    <Date_page_numbers/>
                </div>
            </div>
        );
    }

}

export default riy_Date_page;