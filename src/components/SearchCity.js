import React, { Component } from 'react';
import { Nav,NavItem } from 'react-bootstrap';
import './css/SearchCity.css';

class SearchCity extends Component {
    render() {

        function handleSelect(selectedKey) {
            alert(`selected ${selectedKey}`);
          }
        return (
            <div id="center1">
                <Nav bsStyle="pills"  onSelect={handleSelect} bsClass="nav" >
                   <NavItem eventKey={1} href="/home" >
                        جدة
                        </NavItem>
                   <NavItem eventKey={2} title="Item"> 
                        مكة
                          </NavItem>
                  <NavItem eventKey={3} >
                        الرياض
                        </NavItem>
                </Nav>
            </div>
        );
    }

}

export default SearchCity;