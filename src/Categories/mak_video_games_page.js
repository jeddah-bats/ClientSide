import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from '../components/Navbar'; 
import Video_games_page_navbar from '../components/makkah/Categories/video_games_page_navbar'; 
import Video_games_page_grid from '../components/makkah/Categories/video_games_page_grid';
import Video_games_page_numbers from '../components/makkah/Categories/video_games_page_numbers'; 

class mak_video_games_page extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Video_games_page_navbar/>
                <div id="griddiv">
                    <Video_games_page_grid/>
                    <Video_games_page_numbers/>
                </div>
            </div>
        );
    }

}

export default mak_video_games_page;