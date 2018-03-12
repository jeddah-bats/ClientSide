import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';

class HotProducts extends Component {
    render() {
        return (
            <Grid>
                <h1>المنتجات الأكثر رواجاً</h1>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                    <img alt="900x500" src="assets/block.png" />
                    <h2>قريباً</h2>
                    <p>قريباً</p>
                    </Col>
                    <Col xs={6} md={4}>
                    <img alt="900x500" src="assets/block.png" />
                    <h2>قريباً</h2>
                    <p>قريباً</p>
                    </Col>
                    <Col xs={6} md={4}>
                    <img alt="900x500" src="assets/block.png" />
                    <h2>قريباً</h2>
                    <p>قريباً</p>
                    </Col>
                </Row>  
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                    <img alt="900x500" src="assets/block.png" />
                    <h2>قريباً</h2>
                    <p>قريباً</p>
                    </Col>
                    <Col xs={6} md={4}>
                    <img alt="900x500" src="assets/block.png" />
                    <h2>قريباً</h2>
                    <p>قريباً</p>
                    </Col>
                    <Col xs={6} md={4}>
                    <img alt="900x500" src="assets/block.png" />
                    <h2>قريباً</h2>
                    <p>قريباً</p>
                    </Col>
                </Row>
            </Grid>
        );
    }

}

export default HotProducts;