import React, { Component } from 'react';
import { Pagination, Grid, Row, Col, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import './css/Products_page.css';
import Loading from './Loading';

class product_page_grid extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          Products: []
        };
      }
    
      componentDidMount() {
        fetch("https://jeddah-bats.herokuapp.com/Products?city=%D9%85%D9%83%D8%A9&cat=%D8%A7%D8%AC%D9%87%D8%B2%D8%A9")
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
                <Col xs={4} md={2}>
                    <img class="img" src="assets/calendar.png" />
                </Col>
                <Col xs={16} md={10} className="col">
                    <ListGroup className="lgcontainer">
                        {Products.map(Product => (

                            <ListGroupItem className="lg" >
                                <a id="LinkProduct" target="_blank" href={Product.link}> {Product.name} </a>
                                <p> {Product.price} </p>
                                <p> {Product.date} </p>
                                <p> {Product.cat} </p>
                                <p> {Product.city} </p>
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

export default product_page_grid;