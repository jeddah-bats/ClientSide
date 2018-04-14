import React, { Component } from 'react';
import { Pagination, Grid, Row, Col, ListGroup, ListGroupItem, Image, Button } from 'react-bootstrap';
import './css/Products_page.css';
import Loading from './Loading';
import NotFound from './NotFound';
import ShowMore from "@tedconf/react-show-more";
import {Bar} from 'react-chartjs-2';

class cars_page_grid extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          Products: [],
          Data:{
            labels: ["اثاث","ازياء","العاب الفيديو","اجهزة","حراج"],
            datasets:[{
              label:"عدد المنتجات",
              data:[
                234,324,242,432,237
              ],
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'              ]
            }]
          }
        };
      }
    
      componentDidMount() {
        var city = this.props.data.city;
        fetch("https://jeddah-bats.herokuapp.com/Products?city="+city)
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
            <div>
              <h1>Soon</h1>
              <Bar
                data={this.state.Data}
                width={80}
                height={30}
                options={{
                maintainAspectRatio: false
                }}
              />
              <h1>Only for test</h1>

            
            </div>
        );
      }
    }

}

export default cars_page_grid;