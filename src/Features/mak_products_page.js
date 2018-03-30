import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from '../components/Navbar'; 
import Product_page_navbar from '../components/makkah/Features/products_page_navbar'; 
import Product_page_grid from '../components/makkah/Features/product_page_grid';
import Product_page_numbers from '../components/makkah/Features/product_page_numbers'; 

class mak_products_page extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Product_page_navbar/>
                <div id="griddiv">
                    <Product_page_grid/>
                    <Product_page_numbers/>
                </div>
            </div>
        );
    }

}

export default mak_products_page;