import React, { Component } from 'react';
import { Jumbotron, Button, FormGroup, FormControl, Navbar } from 'react-bootstrap';
import '../css/searchForm.css';

class searchForm extends Component {
    render() {
        return (
        <div class="searchForm_container">
                <form action="https://jeddah-bats.herokuapp.com/Products" method="post" id="form1">
                    <div class="formgroup_container">
                        <FormGroup className="formgroup">
                            <FormControl name="searchfield" className="fcontrol" type="text" placeholder="ابحث عن" />
                        </FormGroup>{' '}
                    </div>

                    <div class="dropDown_container" >
                        <select name="city" id="mySelect" class="dropdown_list" onChange={this.handleDDL}>
                            <option value="all" name="all">كل المدن</option>
                            <option value="جدة" name="جدة">جدة</option>
                            <option value="مكة" name="مكة">مكة</option>
                            <option value="الرياض" name="الرياض" selected>الرياض</option>
                        </select>
                    </div>
                </form>
                <div class="btn_container">
                    <Button type="submit" form="form1" value="Submit" className="search_button" onClick={this.handleClick}>ابحث</Button>
                </div>

            </div>
        );
    }

}

export default searchForm;