import React, { Component } from 'react';
import { Nav,NavItem } from 'react-bootstrap';
import './css/SearchCity.css';

class SearchCity extends Component {
    render() {
        return (
            <div id="divsearchcity">
                <h2>ابـحـث فـي {this.props.data.cityname} </h2>
                <Nav bsStyle="pills">
                    <NavItem eventKey={1} href={this.props.data.othercity[0]}>
                    {this.props.data.othercity[1]}
                    </NavItem>
                    <NavItem eventKey={2} href={this.props.data.othercity[2]}>
                    {this.props.data.othercity[2]}
                    </NavItem>
                </Nav>
                <div id="line"></div>
            </div>
        );
    }

}

export default SearchCity;