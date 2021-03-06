import React, { Component } from 'react';
import { Grid,Row,Col,Button,Thumbnail } from 'react-bootstrap';
import './css/Features.css';
var Link = require('react-router-dom').Link

class Features extends Component {
    render() {
        return (
            <div id="maindivf">
                <Grid>
                <h2 id="features">جِـد مـا تُـريـد فـي {this.props.data.cityname} مـن خـلال</h2>
                    <Row>
                        <Col xs={6} md={4}>
                        <Thumbnail alt="التاريخ" src="assets/calendar.png" >
                                    <h2 className="fcss" >الـتـاريـخ</h2>
                                    <p>لعرض منتجات في تاريخ معين</p>
                            <p>
                            <Link to={'/التاريخ/'+this.props.data.cityname}>
                            <Button bsStyle="primary">أعرض المزيد</Button>
                            </Link>
                            </p>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail  alt="المدينة" src="assets/buildings.png" >
                                    <h2 className="fcss">الـمـديـنـة</h2>
                                    <p>لعرض احصائيات مدينتك</p>
                            <p>
                            <Link to={'/احصائيات/'+this.props.data.cityname}>
                            <Button bsStyle="primary">أعرض المزيد</Button>
                            </Link>
                            </p>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail alt="المنتج" src="assets/bar-code-scanner.png" >
                                    <h2 className="fcss" >الـمـنـتـج</h2>
                                    <p>قم بعرض جميع المنتجات في مدينتك</p>
                            <p>
                            <Link to={'/جميع المنتجات/'+this.props.data.cityname}>
                            <Button bsStyle="primary">أعرض المزيد</Button>
                            </Link>
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