import React, { Component } from 'react';
import { Grid,Row,Col,Panel,Thumbnail } from 'react-bootstrap';
import './css/HotProducts.css';

class HotProducts extends Component {
    render() {
        return (

            <Panel bsStyle="primary" id="panelh">
                <Panel.Heading>
                    <Panel.Title componentClass="h2" bsClass="panel" ><h2>المنتجات الاكثر رواجاَ</h2></Panel.Title>
                </Panel.Heading>
                <Panel.Body>

            <Grid  bsClass="cust">
                <Row className="show-grid" id="cust1">
                    <Col xs={6} md={4} className="cust2" id="firsth">
                    <Thumbnail alt="900x500" src="assets/block.png" >
                    <h2>قريباً</h2>
                    <p>قريباً</p>
                    </Thumbnail>
                    </Col>
                    <Col xs={6} md={4} className="cust2">
                    <Thumbnail alt="900x500" src="assets/block.png" >
                    <h2>قريباً</h2>
                    <p>قريباً</p>
                    </Thumbnail>
                    </Col>
                    <Col xs={6} md={4} className="cust2">
                    <Thumbnail alt="900x500" src="assets/block.png" >
                    <h2>قريباً</h2>
                    <p>قريباً</p>
                    </Thumbnail>
                    </Col>
                </Row>  
                <Row className="show-grid"  id="cust5">
                    <Col xs={6} md={4} className="cust2" id="firsth1">
                    <Thumbnail alt="900x500" src="assets/block.png" >
                    <h2>قريباً</h2>
                    <p>قريباً</p>
                    </Thumbnail>
                    </Col>
                    <Col xs={6} md={4} className="cust2">
                    <Thumbnail alt="900x500" src="assets/block.png" >
                    <h2>قريباً</h2>
                    <p>قريباً</p>
                    </Thumbnail>
                    </Col>
                    <Col xs={6} md={4} className="cust2">
                    <Thumbnail alt="900x500" src="assets/block.png" >
                    <h2>قريباً</h2>
                    <p>قريباً</p>
                    </Thumbnail>
                    </Col>
                </Row>
            </Grid>

            
            </Panel.Body>
            </Panel>
        );
    }

}

export default HotProducts;