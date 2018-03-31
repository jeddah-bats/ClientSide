import React, { Component } from 'react';
import { Jumbotron, Button, FormGroup, FormControl, Navbar } from 'react-bootstrap';
import './css/searchFormNavbar.css';

class searchFormNavbar extends Component {
    render() {
        return (

            <div class="searchFormnav_container">

                <div class="formgro_container">
                    <FormGroup className="formgro">
                        <FormControl className="controlnav" type="text" placeholder="ابحث عن" />
                    </FormGroup>{' '}
                </div>
                <div class="dropDownnav_container" >
                    <select class="dropdown_listnav">
                        <option value="">كل المدن</option>
                        <option value="جدة">جدة</option>
                        <option value="مكة">مكة</option>
                        <option value="الرياض">الرياض</option>
                    </select>
                </div>
                <div class="btnnav_container">
                    <Button className="search_buttonnav" type="submit" >ابحث</Button>
                </div>

            </div>
        );
    }

}

export default searchFormNavbar ;