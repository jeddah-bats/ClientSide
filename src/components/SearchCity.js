import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';

class SearchCity extends Component {
    render() {
        return (
            <div>
                <h1>ابحث في</h1>
                <a href="#"> جدة</a>
                <a href="#"> مكة</a>
                <a href="#"> المدينة المنورة</a>
                <a href="#"> الرياض</a>
                <a href="#"> الخبر</a>
                <a href="#"> مدن اخرى</a>
            </div>
        );
    }

}

export default SearchCity;