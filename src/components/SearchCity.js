import React, { Component } from 'react';
import { Nav,NavItem } from 'react-bootstrap';
import './css/SearchCity.css';

class SearchCity extends Component {
    render() {
        return (
            <div>
                <h2>ابـحـث فـي</h2>
                <Nav bsStyle="pills" activeKey={1} >
                    <NavItem eventKey={1}>
                    جـدة
                    </NavItem>
                    <NavItem eventKey={2}>
                    مـكـة
                    </NavItem>
                    <NavItem eventKey={3} >
                    الريـاض
                    </NavItem>
                </Nav>
                <div id="line"></div>
            </div>
        );
    }

}

export default SearchCity;