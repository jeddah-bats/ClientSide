import React, { Component } from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import './css/products_page_navbar.css';

class Date_page_navbar extends Component {
    render() {
        return (
            <div id="undernav">
            <p id='navbarname'>جـمـيـع الـمـنـتـجـات فـي {this.props.data.city} فـي ت</p>
               &nbsp;
            </div>
        );
    }

}

export default Date_page_navbar;