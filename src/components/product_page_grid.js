import React, { Component } from 'react';
import { Pagination, Grid, Row, Col, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import './css/Products_page.css';

class product_page_grid extends Component {
    render() {
        return (
                <Grid className="gridele">
                    <Row className="show-grid">
                        <Col xs={4} md={2}>
                            <img class="img" src="assets/calendar.png" />
                        </Col>
                        <Col xs={16} md={10} className="col">
                            <ListGroup className="lgcontainer">

                                <ListGroupItem className="lg" >
                                    <span ><img class="impic" src="assets/list-pic.png" /></span>
                                </ListGroupItem>

                                <ListGroupItem className="lg">
                                    <span ><img class="impic" src="assets/list-pic.png" /></span>
                                </ListGroupItem>

                                <ListGroupItem className="lg">
                                    <span ><img class="impic" src="assets/list-pic.png" /></span>
                                </ListGroupItem>

                            </ListGroup>
                        </Col>
                    </Row>
                </Grid>
        );
    }

}

export default product_page_grid;