import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';


class Slider extends Component {
  render() {
    return (
      <div id="infoi">
      <Carousel>
        <Carousel.Item>
          <img width={900} height={200} src="assets/11.jpg" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={200} alt="900x500" src="assets/22.jpg" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }

}

export default Slider;