import React, { Component } from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import './css/products_page_navbar.css';
import { Button } from 'react-bootstrap';

class Date_page_navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '02'
        };
        this.handleChangedate = this.handleChangedate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChangedate(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.props.callbackFromParent(this.state.value);
    }

    render() {

        return (
            <div id="undernav">
            <span id='navbarname'>جـمـيـع الـمـنـتـجـات فـي {this.props.data.city} فـي شـهـر </span>
            <form onSubmit={this.handleSubmit} id="formdate">
              <select value={this.state.value} onChange={this.handleChangedate} id="mySelect"  >
                              <option value="01" name="1" >1</option>
                              <option value="02" name="2">2</option>
                              <option value="03" name="3">3</option>
                              <option value="04" name="4">4</option>
                              <option value="05" name="5" >5</option>
                              <option value="06" name="6">6</option>
                              <option value="07" name="7">7</option>
                              <option value="08" name="8">8</option>
                              <option value="09" name="9" >9</option>
                              <option value="10" name="10">10</option>
                              <option value="11" name="11">1</option>
                              <option value="12" name="12">12</option>
              </select>
            </form>
              <Button type="submit" value="Submit" form="formdate" onclick={this.handleSubmit}>فلتر</Button>
            </div>
        );
    }
}

export default Date_page_navbar;