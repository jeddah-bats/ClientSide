import React, { Component } from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import './css/products_page_navbar.css';

class AllProducts_page_navbar extends Component {
    render() {
        return (
            <div id="undernav">
            <p id='navbarname'>نـتـائـج الـبـحـث عـن " {this.props.data.searchfailed} " فـي {this.props.data.city}</p>
               &nbsp;
            </div>
        );
    }

}

export default AllProducts_page_navbar;