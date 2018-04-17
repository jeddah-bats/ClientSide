import React, { Component } from 'react';
import { Pagination, Grid, Row, Col, ListGroup, ListGroupItem, Image, Button } from 'react-bootstrap';
import './css/Products_page.css';
import Loading from './Loading';
import NotFound from './NotFound';
import Chart from './chart'
import Comparing from './comparing'
import { withRouter } from "react-router-dom";

class Statistics_page_grid extends Component {

  constructor() {
    super();
    this.state = {
      cate: '',
    };
  }
  
  updateCate(event) {
    this.setState({ cate: event.target.value });
    this.props.history.push('/احصائيات/'+this.props.data.city+'?cate='+event.target.value)
  }

    render() {
          return (
            <div>
              <div className="chart">< Chart data={this.props.data} /> </ div>
              <span className="comparing"> مـقـارنـة مـديـنـة {this.props.data.city} مـع الـمـدن الـأخـرى فـي تـصـنـيـف</span>
                  <select value={this.state.cate} onChange={this.updateCate.bind(this)}>
                    <option value="حراج">حراج</option>
                    <option value="اجهزة">اجهزة</option>
                    <option value="العاب فيديو">العاب فيديو</option>
                    <option value="اثاث">اثاث</option>
                    <option value="أزياء">أزياء</option>
                  </select>
                  < Comparing data={this.props.history.location.search.split("=")[1]} />
            </div>
        );
    } 
}

export default withRouter(Statistics_page_grid);

