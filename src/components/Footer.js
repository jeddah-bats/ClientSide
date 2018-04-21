import React, { Component } from 'react';
import './css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <p className="copyright" id="f">جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
                <p id="f">Hosted by: Heroku</p>
            </div>
        );
    }

}
export default Footer;