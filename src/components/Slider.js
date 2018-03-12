import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';


class Slider extends Component {
  render() {
    return (
      <div id="infoi">
      <Carousel controls={false}>
        <Carousel.Item>
          <img src="assets/1.jpg" />
          <Carousel.Caption>
            <h3>مقارنة سريعة للمنتجات بين عدة مواقع</h3>
            <p>قريباً</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={200} alt="900x500" src="assets/2.jpg" />
          <Carousel.Caption>
            <h3>قم بتحقيق دخل أفضل للشركة</h3>
            <p>قريباً</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }

}

export default Slider;