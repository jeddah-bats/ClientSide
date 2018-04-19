import React, { Component } from 'react';
import Navbar from './components/Navbar'; 
import Date_page_navbar from './components/Date_page_navbar'; 
import Date_page_grid from './components/Date_page_grid';

class Date extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentmonth: "01"
        };    
    }

    myCallback = (newmonth) => {
        this.setState({ currentmonth: newmonth });
    }

    render() {
        return (
            <div>
                <Navbar/>
                <Date_page_navbar data={this.props.match.params} callbackFromParent={this.myCallback} />
                <div id="griddiv">
                    <Date_page_grid data={this.props.match.params} date={this.state.currentmonth}/>
                </div>
            </div>
        );
    }
}

export default Date;