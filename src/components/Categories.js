import React, { Component } from 'react';
import { Grid, Row, Col, Panel,Thumbnail } from 'react-bootstrap';
import './css/Categories.css';

class Categories extends Component {
    render() {
        return (

            <Panel bsStyle="primary" id="panelc">
                <Panel.Heading>
                    <Panel.Title componentClass="h2" bsClass="panel" ><h2>التصنيفات</h2></Panel.Title>
                </Panel.Heading>
                <Panel.Body>

                    <Grid bsClass="cust">
                        <div id="row1">
                        <Row className="show-grid" id="cust1">
                            <Col xs={6} md={4} className="cust2" id="firstc">
                            <Thumbnail alt="العاب الفيديو" src="assets/game.png">
                                <h2>العاب فيديو</h2>
                                </Thumbnail>
                            </Col>
                            <Col xs={6} md={4} className="cust2">
                            <Thumbnail alt="اجهزة" src="assets/television.png" >
                                <h2>اجهزة</h2>
                                </Thumbnail>
                            </Col>
                            <Col xs={6} md={4} className="cust2">
                            <Thumbnail alt="حراج" src="assets/car.png" >
                                <h2>حراج</h2>
                                </Thumbnail>
                            </Col>
                        </Row>
                        </div>
                        <Row className="show-grid" id="cust5" >
                            <Col xs={6} md={4} id="firstc1" className="cust2">

                            </Col>
                            <Col xs={6} md={4} className="cust2">
                            <Thumbnail alt="ازياء" src="assets/polo-shirt.png" >
                                <h2>ازياء</h2>
                                </Thumbnail>
                            </Col>
                            <Col xs={6} md={4} className="cust2">
                            <Thumbnail alt="اثاث" src="assets/bed.png" >
                                <h2>اثاث</h2>
                                </Thumbnail>
                            </Col>
                        </Row>
                    </Grid>



                </Panel.Body>
            </Panel>
        );
    }

}

export default Categories;