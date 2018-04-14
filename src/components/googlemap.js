import React, { Component } from 'react';
import Loading from './Loading';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './css/googlemap.css';

const style = {
  width: '100%',
  height: '100%'
}

const LoadingContainer = (props) => (
  <Loading/>
)

class googlemap extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          Places: [],
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {}
        };
      }
    
      componentDidMount() {
        var cate = this.props.data.cate;
        var city = this.props.data.city;
        fetch("https://jeddah-bats.herokuapp.com/Places?city="+city+"&cat="+cate)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                Places: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
      
      GetLat (params) {
        if (params=="جدة")
        return "21.427170"
      else if (params=="مكة")
        return "21.389082"
      else
        return "24.713552"
      }

      GetLng (params) {
        if (params=="جدة")
          return "39.207529"
        else if (params=="مكة")
          return "39.857912"
        else
          return "46.675296"
      }

      state = {

  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

    render() {
        const { error, isLoaded, Places } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <Loading/>; 
        } else {
          return (
            <div>
              <Map
                google={this.props.google}
                style={style}
                initialCenter={{
                  lat: this.GetLat(this.props.data.city),
                  lng: this.GetLng(this.props.data.city) }}
                zoom={11}
                onClick={this.onMapClicked}>
                {Places.map(Place => (
                      <Marker
                      title={Place.name}
                      name={Place.name}
                      url={Place.url}
                      position={{lat: Place.lat, lng: Place.lng}}
                      onClick={this.onMarkerClick} /> 
                ))}
                <InfoWindow
                      marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}>
                        <div>
                          <h6><a href={this.state.selectedPlace.url} id="textinfo" target="_blank">{this.state.selectedPlace.name}</a></h6>
                        </div>
                    </InfoWindow>
              </Map>         
            </div>        
        );
      }
    }
  }

export default GoogleApiWrapper({
  apiKey: ("AIzaSyC7WYSyHRzpaOi8gRzjuOXgtH0f7c9OBBE"),
  LoadingContainer: LoadingContainer
})(googlemap)