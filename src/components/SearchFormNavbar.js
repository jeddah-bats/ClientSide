import React, { Component } from 'react';
import { Jumbotron, Button, FormGroup, FormControl, Navbar } from 'react-bootstrap';
import './css/searchFormNavbar.css';
import { withRouter } from "react-router-dom";

//searchFormnav_container
//formgro_container
class searchFormNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchfield: '', 
            city:'كل المدن'
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

            <div className="searchFormnav_container">
                <form onSubmit={this.handleSubmit} id="form1">
                    <div className="formgro_container">
                        <FormGroup className="formgro">
                            <FormControl type="text" value={this.state.searchfield} onChange={this.handleChangesearchfield} name="searchfield" className="controlnav" type="text" placeholder="ابحث عن" />
                        </FormGroup>{' '}
                    </div>
                    <div className="dropDownnav_container" >
                        <select value={this.state.city} onChange={this.handleChangecity} name="city" id="mySelect" className="dropdown_listnav">
                            <option value="كل المدن" name="all">كل المدن</option>
                            <option value="جدة" name="جدة">جدة</option>
                            <option value="مكة" name="مكة">مكة</option>
                            <option value="الرياض" name="الرياض">الرياض</option>
                        </select>
                    </div>
                </form>
                <div className="btnnav_container">
                <Button type="submit" form="form1" value="Submit" className="search_buttonnav" >ابحث</Button>
                </div>

            </div>
        );
    }

}

export default withRouter(searchFormNavbar);