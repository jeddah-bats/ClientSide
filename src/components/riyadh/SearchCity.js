import React, { Component } from 'react';
import { Nav,NavItem } from 'react-bootstrap';
import '../css/SearchCity.css';

class SearchCity extends Component {
    
    render() {
        return (
            <div id="divsearchcity">
                <h2>ابـحـث فـي الريـاض</h2>
                <Nav bsStyle="pills" >
                    <NavItem eventKey={2} href="makkah">
                    مـكـة
                    </NavItem>
                    <NavItem eventKey={3} href="/">
                    جـدة
                    </NavItem>
                </Nav>
                <div id="line"></div>
            </div>
        );
    }

}

export default SearchCity;