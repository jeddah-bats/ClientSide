import React, { Component } from 'react';
import { Pagination, Grid, Row, Col, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import '../../css/Products_page.css';

class fashion_page_numbers extends Component {
    render() {
        return (
     
               
                    <Pagination className="page">
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item href='/Proudct'>{4}</Pagination.Item>
                        
                        <Pagination.Item disabled>{5}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
        );
    }

}

export default fashion_page_numbers;