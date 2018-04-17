import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './css/Loading.css';

class Loading extends Component {
    render() {
        return (
            <div>
                    <div className="load-3">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
            </div>

        );
    }
}

export default Loading;