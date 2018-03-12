import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';

class SearchCity extends Component {
    render() {
        return (
            <div>
                <h1>ابحث في</h1>
                <p>جدة</p>
                <p>مكة</p>
                <p>المدينة المنورة</p>
                <p>الرياض</p>
                <p>الخبر</p>
                <p>مدن اخرى</p>
            </div>
        );
    }

}

export default SearchCity;