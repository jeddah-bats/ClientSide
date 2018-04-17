import React, { Component } from 'react';
import { Jumbotron, Button, FormGroup, FormControl, Navbar } from 'react-bootstrap';
import './css/searchFormNavbar.css';

class searchFormNavbar extends Component {
    render() {
        return (

            <div className="searchFormnav_container">
                <form action="https://jeddah-bats.herokuapp.com/Products" method="post" id="form1">
                    <div className="formgro_container">
                        <FormGroup className="formgro">
                            <FormControl name="searchfield" className="controlnav" type="text" placeholder="ابحث عن" />
                        </FormGroup>{' '}
                    </div>
                    <div className="dropDownnav_container" >
                        <select name="city" id="mySelect" className="dropdown_listnav">
                            <option value="all" name="all">كل المدن</option>
                            <option value="جدة" name="جدة">جدة</option>
                            <option value="مكة" name="مكة">مكة</option>
                            <option value="الرياض" name="الرياض">الرياض</option>
                        </select>
                    </div>
                </form>
                <div className="btnnav_container">
                    <Button className="search_buttonnav" type="submit" form="form1" value="Submit" onClick={this.handleClick}>ابحث</Button>
                </div>

            </div>
        );
    }

}

export default searchFormNavbar ;