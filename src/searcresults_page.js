import React, { Component } from 'react';
import Navbar from './components/Navbar'; 
import searcresults_page_navbar from './components/searcresults_page_navbar'; 
import searcresults_page_page_grid from './components/searcresults_page_grid';

class searcresults_page extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <searcresults_page_page_navbar data={this.props.match.params}/>
                <div id="griddiv">
                    <searcresults_page_page_grid data={this.props.match.params}/>
                </div>
            </div>
        );
    }
}

export default searcresults_page;