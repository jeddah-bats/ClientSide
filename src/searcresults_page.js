import React, { Component } from 'react';
import Navbar from './components/Navbar'; 
import Searcresults_page_navbar from './components/searcresults_page_navbar'; 
import Searcresults_page_grid from './components/searcresults_page_grid';

class searcresults_page extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Searcresults_page_navbar data={this.props.match.params}/>
                <div id="griddiv">
                    <Searcresults_page_grid data={this.props.match.params}/>
                </div>
            </div>
        );
    }
}

export default searcresults_page;