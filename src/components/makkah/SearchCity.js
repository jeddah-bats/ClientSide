import React, { Component } from 'react';
import { Nav,NavItem } from 'react-bootstrap';
import '../css/SearchCity.css';

class SearchCity extends Component {
    
    render() {
        return (
            <div id="divsearchcity">
                <h2>ابـحـث فـي مـكـة</h2>
                <Nav bsStyle="pills" >
                    <NavItem eventKey={1} href="riyadh">
                    الريـاض
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