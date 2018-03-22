import React, { Component } from 'react';
import { Grid,Row,Col,Button,Thumbnail } from 'react-bootstrap';
import './css/Categories.css';

class Categories extends Component {
    render() {
        return (
            <div id="maindivc">
                <Grid>
                <h2 id="cate">الـتـصـنـيـفـات</h2>
                    <Row>
                    <Col xs={6} md={4}>
                        <Thumbnail alt="c2" src="assets/television.png" >
                                    <h2 class="ccss">اجـهـزة</h2>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail alt="c3" src="assets/car.png" >
                                    <h2 class="ccss">حـراج</h2>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail alt="c1" src="assets/game.png" >
                                    <h2 class="ccss">الـعـاب الـفـيـديـو</h2>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>

                        </Col>  
                        <Col xs={6} md={4}>
                        <Thumbnail alt="c5" src="assets/polo-shirt.png" >
                                    <h2 class="ccss">أزيـاء</h2>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail alt="c4" src="assets/bed.png" >
                                    <h2 class="ccss">اثـاث</h2>
                        </Thumbnail>
                        </Col>              
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Categories;