import React, { Component } from 'react';
import Navbar from './components/Navbar'; 
import Statistics_page_navbar from './components/Statistics_page_navbar'; 
import Statistics_page_grid from './components/Statistics_page_grid';

class Statistics extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Statistics_page_navbar data={this.props.match.params}/>
                <div id="griddiv">
                    <Statistics_page_grid data={this.props.match.params}/>
                </div>
            </div>
        );
    }
}

export default Statistics;