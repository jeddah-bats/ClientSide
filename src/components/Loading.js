import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './css/Loading.css';

class Loading extends Component {
    render() {
        return (
            <div>
                    <div class="load-3">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
            </div>

        );
    }
}

export default Loading;