import React, { Component } from 'react';
import { Jumbotron, Button, FormGroup, FormControl, Navbar } from 'react-bootstrap';
import '../css/searchForm.css';

class searchForm extends Component {
    render() {
        return (

            <div class="searchForm_container">

                <div class="formgroup_container">
                    <FormGroup className="formgroup">
                    <FormControl className="fcontrol" type="text" placeholder="ابحث عن" />
                    </FormGroup>{' '}
                </div>
                <div class="dropDown_container" >
                    <select class="dropdown_list">
                        <option value="">كل المدن</option>
                        <option value="جدة">جدة</option>
                        <option value="مكة">مكة</option>
                        <option value="الرياض">الرياض</option>
                    </select>
                </div>
                <div class="btn_container">
                    <Button className="search_button" type="submit" >ابحث</Button>
                </div>

            </div>
        );
    }

}

export default searchForm;