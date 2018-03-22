import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './css/Carousel.css';

class carousel extends Component {
    render() {
        return (
            <div id="infoi">
                <Carousel controls={false}>
                    <Carousel.Item>
                        <img width={900} height={200} alt="900x500" src="assets/1.jpg" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={200} alt="900x500" src="assets/2.jpg" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }

}

export default carousel;