import React, { Component } from 'react';
import { Pagination, Grid, Row, Col, ListGroup, ListGroupItem, Image, Button } from 'react-bootstrap';
import './css/Products_page.css';
import Loading from './Loading';
import NotFound from './NotFound';
import {Bar} from 'react-chartjs-2';

class chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          statistics: []
        };
      }
    
      componentDidMount() {
        var city = this.props.data.city;
        fetch("https://jeddah-bats.herokuapp.com/statistics/"+city)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                statistics: result
              });
            }
          )
          .catch((error) => {
            this.setState({
              isLoaded: true,
              error
            });
          });
      }

    render() {

        const { error, isLoaded, statistics } = this.state;
        if (error) {
          return <NotFound />;
        } else if (!isLoaded) {
          return <Loading/>; 
        } else if (statistics.length==0) {
          if(this.props.data.city!="جدة" && this.props.data.city!="مكة" && this.props.data.city!="الرياض")
          return <NotFound/>;
          return <h1>عذراً لا توجد احصائيات في مدينة {this.props.data.city}</h1>;  
        }else {
          return (
            <div>
              <Bar
                data={
                  {
                    labels: [statistics[0]._id,statistics[1]._id,statistics[2]._id,statistics[3]._id,statistics[4]._id],
                    datasets:[{
                      label:"عدد المنتجات",
                      data:[
                        statistics[0].total,statistics[1].total,statistics[2].total,statistics[3].total,statistics[4].total
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
                }
                width={80}
                height={250}
                options={{
                maintainAspectRatio: false
                }}
              />
            </div>
        );
      }
    }

}

export default chart;