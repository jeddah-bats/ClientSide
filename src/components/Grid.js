import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';

class grid extends Component {
    render() {
        return (
            <Grid>
                <h1>ميزات</h1>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                    <img width={60} height={60} alt="900x500" src="assets/3.png" />
                    <h2>التاريخ</h2>
                    <p>حيكون هنا في شويا كلام حلو</p>
                    </Col>
                    <Col xs={6} md={4}>
                    <img width={60} height={60} alt="900x500" src="assets/3.png" />
                    <h2>المدينة</h2>
                    <p>حيكون هنا في شويا كلام حلو</p>
                    </Col>
                    <Col xs={6} md={4}>
                    <img width={60} height={60} alt="900x500" src="assets/3.png" />
                    <h2>المنتج</h2>
                    <p>حيكون هنا في شويا كلام حلو</p>
                    </Col>
                </Row>
            </Grid>
        );
    }

}

export default grid;