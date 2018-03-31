import React, { Component } from 'react';
import { Navbar,Nav,NavItem,NavDropdown,FormGroup,Button,FormControl } from 'react-bootstrap';
import './css/NavBar.css';
import SearchFormNavbar from './SearchFormNavbar';

var Link = require('react-router-dom').Link

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">INBSM</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Navbar.Form >
                        <SearchFormNavbar />                     
                        </Navbar.Form>
                    </Navbar.Collapse>

                    <Navbar.Toggle />
                </Navbar>
            </div>
        );
    }

}

export default NavBar;