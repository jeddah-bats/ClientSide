import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import './css/Categories.css';

class Categories extends Component {
    render() {
        return (

            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h2" bsClass="panel" ><h2>التصنيفات</h2></Panel.Title>
                </Panel.Heading>
                <Panel.Body>

                    <Grid bsClass="cust">
                        <h1>التصنيفات</h1>
                        <div id="row1">
                        <Row className="show-grid" id="cust1">
                            <Col xs={6} md={4} className="cust2" id="firstc">
                                <img alt="العاب الفيديو" src="assets/game.png" />
                                <h2>العاب فيديو</h2>
                            </Col>
                            <Col xs={6} md={4} className="cust2">
                                <img alt="اجهزة" src="assets/television.png" />
                                <h2>اجهزة</h2>
                            </Col>
                            <Col xs={6} md={4} className="cust2">
                                <img alt="حراج" src="assets/car.png" />
                                <h2>حراج</h2>
                            </Col>
                        </Row>
                        </div>
                        <Row className="show-grid" id="cust5" >
                            <Col xs={6} md={4} id="firstc1">

                            </Col>
                            <Col xs={6} md={4} className="cust2">
                                <img alt="ازياء" src="assets/polo-shirt.png" />
                                <h2>ازياء</h2>
                            </Col>
                            <Col xs={6} md={4} className="cust2">
                                <img alt="اثاث" src="assets/bed.png" />
                                <h2>اثاث</h2>
                            </Col>
                        </Row>
                    </Grid>



                </Panel.Body>
            </Panel>
        );
    }

}

export default Categories;