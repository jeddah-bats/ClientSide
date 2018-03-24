import React, { Component } from 'react';
import { Grid,Row,Col,Button,Thumbnail } from 'react-bootstrap';
import '../css/Features.css';

class Features extends Component {
    render() {
        return (
            <div id="maindivf">
                <Grid>
                <h2 id="features">جِـد مـا تُـريـد مـن خـلال</h2>
                    <Row>
                        <Col xs={6} md={4}>
                        <Thumbnail alt="التاريخ" src="assets/calendar.png" >
                                    <h2 class="fcss" >الـتـاريـخ</h2>
                                    <p>لعرض منتجات في تاريخ معين</p>
                            <p>
                            <Button bsStyle="primary">أعرض المزيد</Button>
                            </p>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail  alt="المدينة" src="assets/buildings.png" >
                                    <h2 class="fcss">الـمـديـنـة</h2>
                                    <p>لعرض المنتجات التي تباع في مدينتك</p>
                            <p>
                            <Button bsStyle="primary">أعرض المزيد</Button>
                            </p>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail alt="المنتج" src="assets/bar-code-scanner.png" >
                                    <h2 class="fcss" >الـمـنـتـج</h2>
                                    <p>قم بالبحث عن منتج محدد</p>
                            <p>
                            <Button bsStyle="primary">أعرض المزيد</Button>
                            </p>
                        </Thumbnail>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Features;