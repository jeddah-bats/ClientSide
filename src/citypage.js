import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Navcpage from './components/navcpage'; 
import Mappage from './components/mappage'; 


class citypage extends Component {
    render() {
        return (
            <div>
                <Navcpage/>
                <Mappage/>
            </div>
        );
    }

}

export default citypage;