import React, { Component } from 'react';
import {Form, Jumbotron, Button, FormGroup, FormControl, Navbar } from 'react-bootstrap';
import './css/searchForm.css';
import { withRouter } from "react-router-dom";
var Link = require('react-router-dom').Link

class searchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchfield: '', 
            city:''
        };

        this.handleChangesearchfield = this.handleChangesearchfield.bind(this);
        this.handleChangecity = this.handleChangecity.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangesearchfield(event) {
        this.setState({ searchfield: event.target.value });
    }

    handleChangecity(event) {
        this.setState({ city: event.target.value });
    }

    handleSubmit(event) {
        this.props.history.push('/النتائج/'+this.state.city+'/'+this.state.searchfield)
        event.preventDefault();
    }


    render() {
        return (
            <div className="searchForm_container">
                <form onSubmit={this.handleSubmit} id="form1">
                    <div className="formgroup_container">
                        <FormGroup className="formgroup">
                            <FormControl type="text" value={this.state.searchfield} onChange={this.handleChangesearchfield} name="searchfield" className="fcontrol" type="text" placeholder="ابحث عن" />
                        </FormGroup>{' '}
                    </div>

                    <div className="dropDown_container" >
                        <select value={this.state.city} onChange={this.handleChangecity} name="city" id="mySelect" className="dropdown_list" >
                            <option value="كل المدن" name="كل المدن" defaultValue >كل المدن</option>
                            <option value="جدة" name="جدة">جدة</option>
                            <option value="مكة" name="مكة">مكة</option>
                            <option value="الرياض" name="الرياض">الرياض</option>
                        </select>
                    </div>
                </form>
                <div className="btn_container">
                    <Button type="submit" form="form1" value="Submit" className="search_button" >ابحث</Button>
                </div>
            </div>
        );
    }

}

export default withRouter(searchForm);