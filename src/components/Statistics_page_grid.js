import React, { Component } from 'react';
import { Pagination, Grid, Row, Col, ListGroup, ListGroupItem, Image, Button } from 'react-bootstrap';
import './css/Products_page.css';
import Loading from './Loading';
import NotFound from './NotFound';
import Chart from './chart'
import Comparing from './comparing'

class Statistics_page_grid extends Component {

  constructor() {
    super();
    this.state = {
      cate: 'حراج'
    };
  }
  
  updateCate(event) {
    this.setState({cate: event.target.value});
  }

  getCate(event) {
    return this.state.value
  }

    render() {
          return (
            <div>
              < Chart data={this.props.data} />
              <h2 className="comparing"> مـقـارنـة مـديـنـة {this.props.data.city} مـع الـمـدن الـأخـرى فـي تـصـنـيـف</h2>
                  <select value={this.state.cate} onChange={this.updateCate.bind(this)}>
                    <option value="حراج">حراج</option>
                    <option value="اجهزة">اجهزة</option>
                    <option value="العاب فيديو">العاب فيديو</option>
                    <option value="اثاث">اثاث</option>
                    <option value="أزياء">أزياء</option>
                  </select>
                     < Comparing data={this.state.cate} />
            </div>
        );
    } 
}

export default Statistics_page_grid;

