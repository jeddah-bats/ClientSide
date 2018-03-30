import React, { Component } from 'react';
import { Pagination, Grid, Row, Col, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import '../../css/Products_page.css';
import Loading from '../../Loading';

class furnitures_page_grid extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          Products: []
        };
      }
    
      componentDidMount() {
        fetch("https://jeddah-bats.herokuapp.com/Products?city=%D9%85%D9%83%D8%A9&cat=%D8%A7%D8%AB%D8%A7%D8%AB")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                Products: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render() {
        const { error, isLoaded, Products } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <Loading/>; 
        } else {
          return (
            <Grid className="gridele">
            <Row className="show-grid">
                <Col xs={4} md={2} className="colmap">
                <img class="img" src="../../assets/calendar.png" />
                </Col>
                <Col xs={16} md={10} className="col">
                    <ListGroup className="lgcontainer">
                        {Products.map(Product => (

                  <ListGroupItem className="lg" >
                    <div class="adx">

                      <div class="adxTitle"><a id="LinkProduct" target="_blank" href={Product.link}> {Product.name} </a></div>

                      <div calss="adxExtraInfo">
                        <span class="adxExtraInfoPart">السعر:  {Product.price} ريال </span>
                        <span class="adxExtraInfoPart">التاريخ:  {Product.date} </span>
                      </div>

                      <div calss="adxExtraInfo">
                      <span class="adxExtraInfoPart">التصنيف:  {Product.cat} </span>
                        <span class="adxExtraInfoPart">المدينة:  {Product.city} </span>
                      </div>

                    </div>
                  </ListGroupItem>
                            
                        ))}
                    </ListGroup>
                </Col>
            </Row>
            </Grid>
        );
      }
    }

}

export default furnitures_page_grid;