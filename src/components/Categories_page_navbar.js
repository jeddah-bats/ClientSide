import React, { Component } from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import './css/products_page_navbar.css';

class searchresults_page_navbar extends Component {
    render() {
        return (
            <div id="undernav">
            <p id='navbarname'>{this.props.data.cate} فـي {this.props.data.city}</p>
               &nbsp;
            </div>
        );
    }

}

export default searchresults_page_navbar;