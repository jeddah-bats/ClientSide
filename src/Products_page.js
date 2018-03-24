import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from './components/Navbar'; 
import Products_page_navbar from './components/products_page_navbar'; 
import Product_page_content from './components/product_page_content'; 


class Products_page extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Products_page_navbar/>
                <Product_page_content/>
            </div>
        );
    }

}

export default Products_page;