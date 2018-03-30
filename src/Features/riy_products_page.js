import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from '../components/Navbar'; 
import Product_page_navbar from '../components/riyadh/Features/products_page_navbar'; 
import Product_page_grid from '../components/riyadh/Features/product_page_grid';
import Product_page_numbers from '../components/riyadh/Features/product_page_numbers'; 

class riy_products_page extends Component {
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

export default riy_products_page;