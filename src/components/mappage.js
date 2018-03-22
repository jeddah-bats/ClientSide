import React, { Component } from 'react';
import { Pagination, Grid, Row, Col, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import './css/mappage.css';

class mappage extends Component {
    render() {
        return (
            <div id="griddiv">
                <Grid className="gridele">
                    <Row className="show-grid">
                        <Col xs={4} md={2}> 
                            <img class="img" src="assets/calendar.png" />
                        </Col>
                        <Col xs={16} md={10} className="col">
                            <ListGroup className="lgcontainer">

                                <ListGroupItem className="lg" >
                               <span ><img  class="impic"  src="assets/list-pic.png"/></span>
                                </ListGroupItem>

                                <ListGroupItem className="lg"> 
                                <span ><img  class="impic"  src="assets/list-pic.png"/></span>
                                </ListGroupItem>

                                <ListGroupItem className="lg"> 
                                <span ><img  class="impic"  src="assets/list-pic.png"/></span>
                                </ListGroupItem>
                              
                            </ListGroup>
                        </Col>
                    </Row>
                </Grid>
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


                   

            </div>
        );
    }

}

export default mappage;