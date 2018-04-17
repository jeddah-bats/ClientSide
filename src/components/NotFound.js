import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './css/NotFound.css';

class NotFound extends Component {
    render() {
        return (
            <div id='oopss'>
                <div id='error-text'>
                    <span>404</span>
                    <p>PAGE NOT FOUND</p>
                    <p className='hmpg'><a href='/' className="back">Back To Home</a></p>
                </div>
            </div>
        );
    }

}

export default NotFound;