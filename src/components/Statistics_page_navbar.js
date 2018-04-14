import React, { Component } from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import './css/products_page_navbar.css';

class Statistics_page_navbar extends Component {
    render() {
        return (
            <div id="undernav">
            <p id='navbarname'>احـصـائـيـات مـديـنـة {this.props.data.city}</p>
               &nbsp;
            </div>
        );
    }

}

export default Statistics_page_navbar;