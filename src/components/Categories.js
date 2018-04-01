import React, { Component } from 'react';
import { Grid,Row,Col,Button,Thumbnail } from 'react-bootstrap';
import './css/Categories.css';

var Link = require('react-router-dom').Link

class Categories extends Component {
    render() {
        return (
            <div id="maindivc">
                <Grid>
                <h2 id="cate">الـتـصـنـيـفـات</h2>
                    <Row>
                    <Link to='/jed/video-games'>
                    <Col xs={6} md={4}>
                        <button class="bc">
                            <p><img class="iconcat" src="assets/game.png" /></p>
                            الـعـاب الـفـيـديـو
                        </button>
                    </Col></Link>
                    <Link to='/jed/electronics'>
                    <Col xs={6} md={4}>
                        <button class="bc">
                            <p><img class="iconcat" src="assets/television.png" /></p>
                            اجـهـزة
                        </button>
                        </Col></Link>
                        <Link to='/jed/cars'>
                        <Col xs={6} md={4}>
                        <button class="bc">
                            <p><img class="iconcat" src="assets/car.png" /></p>
                            حـراج
                        </button>
                        </Col></Link>
                        <Col xs={6} md={4}>

                        </Col>
                        <Link to='/jed/fashion'>
                        <Col xs={6} md={4}>
                        <button class="bc" >
                            <p><img class="iconcat" src="assets/polo-shirt.png" /></p>
                            أزيـاء
                        </button>
                        </Col></Link>
                        <Link to='/jed/furnitures'>
                        <Col xs={6} md={4}>
                        <button class="bc" >
                            <p><img class="iconcat" src="assets/bed.png" /></p>
                            اثـاث
                        </button>
                        </Col></Link>            
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Categories;