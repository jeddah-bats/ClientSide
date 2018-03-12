import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';

class Categories extends Component {
    render() {
        return (
            <Grid>
                <h1>التصنيفات</h1>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                    <img alt="العاب الفيديو" src="assets/game.png" />
                    <h2>العاب فيديو</h2>
                    </Col>
                    <Col xs={6} md={4}>
                    <img alt="اجهزة" src="assets/television.png" />
                    <h2>اجهزة</h2>
                    </Col>
                    <Col xs={6} md={4}>
                    <img alt="حراج" src="assets/car.png" />
                    <h2>حراج</h2>
                    </Col>
                </Row>  
                <Row className="show-grid">
                    <Col xs={6} md={4}>

                    </Col>
                    <Col xs={6} md={4}>
                    <img alt="ازياء" src="assets/polo-shirt.png" />
                    <h2>ازياء</h2>
                    </Col>
                    <Col xs={6} md={4}>
                    <img alt="اثاث" src="assets/bed.png" />
                    <h2>اثاث</h2>
                    </Col>
                </Row>
            </Grid>
        );
    }

}

export default Categories;