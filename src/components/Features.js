import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button, Label, Panel } from 'react-bootstrap';
import './css/Features.css'

class Features extends Component {
    render() {
        return (


            <Panel id="panelf" bsStyle="primary">
                <Panel.Heading id="panel">
                    <Panel.Title componentClass="h2"  ><h2>ابحث في</h2></Panel.Title>
                </Panel.Heading>
                <Panel.Body>


                    <Grid bsClass="cust">
                        <Row className="show-grid" id="cust1">
                            <Col xs={6} md={4} className="cust2" id="firstf">
                                <Thumbnail alt="التاريخ" src="assets/calendar.png" >
                                    <h2>التاريخ</h2>
                                    <p>لعرض منتجات في تاريخ معين</p>
                                    
                                </Thumbnail>
                            </Col>
                            <Col xs={6} md={4} className="cust2">
                                <Thumbnail Thumbnail alt="المدينة" src="assets/buildings.png" >
                                    <h2>المدينة</h2>
                                    <p>لعرض المنتجات التي تباع في مدينتك</p>
                                    
                                </Thumbnail>
                            </Col>
                            <Col xs={6} md={4} className="cust2">
                                <Thumbnail alt="المنتج" src="assets/bar-code-scanner.png" >
                                    <h2>المنتج</h2>
                                    <p>قم بالبحث عن منتج محدد</p>
                                   
                                </Thumbnail>
                            </Col>
                        </Row>
                    </Grid>





                </Panel.Body>
            </Panel>





        );
    }

}

export default Features;