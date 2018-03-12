import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';

class HotProducts extends Component {
    render() {
        return (
            <Grid>
                <h1>المنتجات الأكثر رواجاً</h1>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                    <img width={60} height={60} alt="900x500" src="assets/4.gif" />
                    <h2>عسكريم</h2>
                    <p>حيكون هنا في شويا كلام حلو</p>
                    </Col>
                    <Col xs={6} md={4}>
                    <img width={60} height={60} alt="900x500" src="assets/5.jpg" />
                    <h2>عطر</h2>
                    <p>حيكون هنا في شويا كلام حلو</p>
                    </Col>
                    <Col xs={6} md={4}>
                    <img width={60} height={60} alt="900x500" src="assets/6.png" />
                    <h2>هواوي</h2>
                    <p>حيكون هنا في شويا كلام حلو</p>
                    </Col>
                </Row>  <Row className="show-grid">
                    <Col xs={6} md={4}>
                    <img width={60} height={60} alt="900x500" src="assets/4.gif" />
                    <h2>عسكريم</h2>
                    <p>حيكون هنا في شويا كلام حلو</p>
                    </Col>
                    <Col xs={6} md={4}>
                    <img width={60} height={60} alt="900x500" src="assets/5.jpg" />
                    <h2>عطر</h2>
                    <p>حيكون هنا في شويا كلام حلو</p>
                    </Col>
                    <Col xs={6} md={4}>
                    <img width={60} height={60} alt="900x500" src="assets/6.png" />
                    <h2>هواوي</h2>
                    <p>حيكون هنا في شويا كلام حلو</p>
                    </Col>
                </Row>
            </Grid>
        );
    }

}

export default HotProducts;