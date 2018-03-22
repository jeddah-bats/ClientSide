import React, { Component } from 'react';
import { Button, FormGroup, FormControl, MenuItem, InputGroup, DropdownButton, ControlLabel, Form, ButtonToolbar } from 'react-bootstrap';
import './css/Search.css';



class Search extends Component {
    
    render() {
        return (
            <div id="search">
                <div class="box">
                    <input type="search" class="in1" />
                    <select class="sel">
                        <option value="jed" selected>جدة</option>
                        <option value="mkh">مكة</option>
                        <option value="ray">الرياض</option>
                    </select>

                    <button class="butt" type="button" ><img alt="search" src="assets/magnifier.png" /></button>
                </div>
            </div>
        );
    }

}

export default Search;