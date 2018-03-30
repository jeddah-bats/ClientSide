import React, { Component } from 'react';
import { Jumbotron, Button, FormGroup, FormControl, Navbar } from 'react-bootstrap';
import './css/searchFormNavbar.css';

class searchFormNavbar extends Component {
    render() {
        return (

            <div class="searchFormcontainer">

                <div class="formgroupcontainer">
                    <FormGroup className="formgroup">
                        <FormControl className="fcontrol" type="text" placeholder="ابحث عن" />
                    </FormGroup>{' '}
                </div>
                <div class="dropDowncontainer" >
                    <select class="dropdownlist">
                        <option value="">كل المدن</option>
                        <option value="جدة">جدة</option>
                        <option value="مكة">مكة</option>
                        <option value="الرياض">الرياض</option>
                    </select>
                </div>
                <div class="btncontainer">
                    <Button className="searchbutton" type="submit" >ابحث</Button>
                </div>

            </div>
        );
    }

}

export default searchFormNavbar ;