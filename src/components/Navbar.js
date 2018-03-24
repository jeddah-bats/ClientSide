import React, { Component } from 'react';
import { Navbar,Nav,NavItem,NavDropdown,FormGroup,Button,FormControl } from 'react-bootstrap';
import './css/NavBar.css';

var Link = require('react-router-dom').Link

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <Link  to='/'> INBSM </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" /></FormGroup>{' '}
                            <Button type="submit">Submit</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

}

export default NavBar;