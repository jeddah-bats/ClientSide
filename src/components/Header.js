import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Carousel controls={false}>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="assets/1.png" />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>-------</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="assets/2.png" />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>--------</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }

}

export default Header;