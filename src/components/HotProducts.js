import React, { Component } from 'react';
import { Grid,Row,Col,Panel } from 'react-bootstrap';
import './css/HotProducts.css';

class HotProducts extends Component {
    render() {
        return (

            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h2" bsClass="panel" ><h2>المنتجات الاكثر رواجاَ</h2></Panel.Title>
                </Panel.Heading>
                <Panel.Body>

            <Grid  bsClass="cust">
                <h1>المنتجات الأكثر رواجاً</h1>
                <Row className="show-grid" id="cust1">
                    <Col xs={6} md={4} className="cust2" id="firsth">
                    <img alt="900x500" src="assets/block.png" />
                    <h2>قريباً</h2>
                    <p>قريباً</p>
                    </Col>
                    <Col xs={6} md={4} className="cust2">
                    <img alt="900x500" src="assets/block.png" />
                    <h2>قريباً</h2>
                    <p>قريباً</p>
                    </Col>
                    <Col xs={6} md={4} className="cust2">
                    <img alt="900x500" src="assets/block.png" />
                    <h2>قريباً</h2>
                    <p>قريباً</p>
                    </Col>
                </Row>  
                <Row className="show-grid"  id="cust5">
                    <Col xs={6} md={4} className="cust2" id="firsth1">
                    <img alt="900x500" src="assets/block.png" />
                    <h2>قريباً</h2>
                    <p>قريباً</p>
                    </Col>
                    <Col xs={6} md={4} className="cust2">
                    <img alt="900x500" src="assets/block.png" />
                    <h2>قريباً</h2>
                    <p>قريباً</p>
                    </Col>
                    <Col xs={6} md={4} className="cust2">
                    <img alt="900x500" src="assets/block.png" />
                    <h2>قريباً</h2>
                    <p>قريباً</p>
                    </Col>
                </Row>
            </Grid>

            
            </Panel.Body>
            </Panel>
        );
    }

}

export default HotProducts;