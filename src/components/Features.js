import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';

class Features extends Component {
    render() {
        return (
            <Grid>
                <h1>مميزات</h1>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                    <img alt="التاريخ" src="assets/calendar.png" />
                    <h2>التاريخ</h2>
                    <p>لعرض منتجات في تاريخ معين</p>
                    </Col>
                    <Col xs={6} md={4}>
                    <img alt="المدينة" src="assets/buildings.png" />
                    <h2>المدينة</h2>
                    <p>لعرض المنتجات التي تباع في مدينتك</p>
                    </Col>
                    <Col xs={6} md={4}>
                    <img alt="المنتج" src="assets/bar-code-scanner.png" />
                    <h2>المنتج</h2>
                    <p>قم بالبحث عن منتج محدد</p>
                    </Col>
                </Row>
            </Grid>
        );
    }

}

export default Features;