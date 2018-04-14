import React, { Component } from 'react';
import Navbar from './components/Navbar'; 
import Date_page_navbar from './components/Date_page_navbar'; 
import Date_page_grid from './components/Date_page_grid';

class Date extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Date_page_navbar data={this.props.match.params}/>
                <div id="griddiv">
                    <Date_page_grid data={this.props.match.params}/>
                </div>
            </div>
        );
    }
}

export default Date;