import React, { Component } from 'react';
import { Jumbotron, Button, FormGroup, FormControl } from 'react-bootstrap';
import SearchForm from './SearchForm';
import './css/hero.css';

class Hero extends Component {
    render() {
        return (
            <Jumbotron className="hero">
                <h1 class="hero-title">البحث عن المنتجات و دراسة الاحصائيات</h1>
                <h1 class="hero-title">التسويق.. لعبتك الخاصة</h1>
                <SearchForm />
                <div class="fill_div">
                    </div>
            </Jumbotron>
        );
    }

}

export default Hero;