import React, { Component } from 'react';
import { Pagination, Grid, Row, Col, ListGroup, ListGroupItem, Image, Button } from 'react-bootstrap';
import './css/Products_page.css';
import Loading from './Loading';
import NotFound from './NotFound';
import { Doughnut } from 'react-chartjs-2';

class comparing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      statistics: []
    };
  }

  componentDidMount() {
    this.Dofetch();
  }

  componentDidUpdate() {
    this.Dofetch();
  }

  Dofetch(){
    var cat = (this.props.data === '') ? 'حراج' : this.props.data
    fetch("https://jeddah-bats.herokuapp.com/comparing/" + cat)
      .then(res => { console.log(res); return res.json(); })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            statistics: result
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
    const { error, isLoaded, statistics } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loading />;
    } else if (statistics.length == 0) {
      return <NotFound />;
    } else {
      return (
        <div>
          <Doughnut
            data={
              {
                labels: [statistics[0]._id, statistics[1]._id, statistics[2]._id],
                datasets: [{
                  data: [
                    statistics[0].total, statistics[1].total, statistics[2].total
                  ],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)']
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

export default comparing;