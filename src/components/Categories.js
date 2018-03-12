import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';

class Categories extends Component {
    render() {
        return (
            <Grid>
                <h1>التصنيفات</h1>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                    <img width={60} height={60} alt="900x500" src="assets/7.png" />
                    <h2>اجهزة</h2>
                    <p>حيكون هنا في شويا كلام حلو</p>
                    </Col>
                    <Col xs={6} md={4}>
                    <img width={60} height={60} alt="900x500" src="assets/7.png" />
                    <h2>حراج</h2>
                    <p>حيكون هنا في شويا كلام حلو</p>
                    </Col>
                    <Col xs={6} md={4}>
                    <img width={60} height={60} alt="900x500" src="assets/7.png" />
                    <h2>اثاث</h2>
                    <p>حيكون هنا في شويا كلام حلو</p>
                    </Col>
                </Row>  <Row className="show-grid">
                    <Col xs={6} md={4}>
                    <img width={60} height={60} alt="900x500" src="assets/7.png" />
                    <h2>ازياء</h2>
                    <p>حيكون هنا في شويا كلام حلو</p>
                    </Col>
                    <Col xs={6} md={4}>
                    <img width={60} height={60} alt="900x500" src="assets/7.png" />
                    <h2>العاب الفيديو</h2>
                    <p>حيكون هنا في شويا كلام حلو</p>
                    </Col>
                    <Col xs={6} md={4}>
                    <img width={60} height={60} alt="900x500" src="assets/7.png" />
                    <h2>اخرى</h2>
                    <p>حيكون هنا في شويا كلام حلو</p>
                    </Col>
                </Row>
            </Grid>
        );
    }

}

export default Categories;