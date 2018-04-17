import React, { Component } from 'react';
import { Pagination, Grid, Row, Col, ListGroup, ListGroupItem, Image, Button } from 'react-bootstrap';
import './css/Products_page.css';
import Loading from './Loading';
import NotFound from './NotFound';
import ShowMore from "@tedconf/react-show-more";

class searcresults_page_grid extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          Products: []
        };
      }
    
      componentDidMount() {
        var city = this.props.data.city;
        var searchfailed = this.props.data.searchfailed;
        fetch("https://jeddah-bats.herokuapp.com/results"+"/"+city+"/"+searchfailed)
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
        } else if (Products.length==0) {
          return <NotFound/>; 
        }else {
          return (
            <Grid className="gridele">
            <Row className="show-grid">
                <Col xs={4} md={2} className="colmap">

                </Col>
                <Col xs={16} md={10} className="col">
                <ShowMore items={Products} by={20}>
              {({ current, onMore }) => (
                <div>
                  <ListGroup className="lgcontainer">
                  {current.map(item => 
                  
                  <ListGroupItem className="lg" key={item._id}>
                    <div className="adx">

                      <div className="adxTitle"><a id="LinkProduct" target="_blank" href={item.link}> {item.name} </a></div>

                      <div className="adxExtraInfo">
                        <span className="adxExtraInfoPart">السعر:  {item.price} ريال </span>
                        <span className="adxExtraInfoPart">التاريخ:  {item.date} </span>
                      </div>

                      <div className="adxExtraInfo">
                      <span className="adxExtraInfoPart">التصنيف:  {item.cat} </span>
                        <span className="adxExtraInfoPart">المدينة:  {item.city} </span>
                      </div>

                    </div>
                  </ListGroupItem>
                  )}
                  </ListGroup>
                  <Button bsStyle="primary"
                    disabled={!onMore}
                    onClick={() => {
                      if (!!onMore) onMore();
                    }}
                  >
                    اعرض المزيد
                  </Button>
                </div>
              )}
            </ShowMore>   
                </Col>
            </Row>
            </Grid>      
        );
      }
    }

}

export default searcresults_page_grid;