import React, { Component } from 'react';
import { Grid,Row,Col,Button,Thumbnail } from 'react-bootstrap';
import './css/HotProducts.css';

class HotProducts extends Component {
    render() {
        return (
            <div id="maindivh">
                <Grid>
                <h2 id="hotproducts">الـمُـنـتـجـات الـأكـثـر رواجـاً فـي {this.props.data.cityname}</h2>
                    <Row>
                        <Col xs={6} md={4}>
                        <Thumbnail alt="p1" src="assets/block.png" >
                                    <h2 className='products' >المنتج الثالث</h2>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail alt="p2" src="assets/block.png" >
                                    <h2 className='products'>المنتج التاني</h2>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail alt="p3" src="assets/block.png" >
                                    <h2 className='products'>المنتج الأول</h2>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail alt="p6" src="assets/block.png" >
                                    <h2 className='products'>المنتج السادس</h2>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail alt="p5" src="assets/block.png" >
                                    <h2 className='products'>المنتج الخامس</h2>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail alt="p4" src="assets/block.png" >
                                    <h2 className='products'>المنتج الرابع</h2>
                        </Thumbnail>
                        </Col>                
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default HotProducts;