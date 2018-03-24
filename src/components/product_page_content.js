import React, { Component } from 'react';
import { Pagination, Grid, Row, Col, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import './css/Products_page.css';
import Product_page_grid from './product_page_grid';
import Product_page_numbers from './product_page_numbers';

class product_page_content extends Component {
    render() {
        return (
            <div id="griddiv">
            <Product_page_grid/>
            <product_page_numbers/>
            </div>
        );
    }

}

export default product_page_content;