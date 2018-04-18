import React, { Component } from 'react';
import Loading from './Loading';
import NotFound from './NotFound';
import { Grid,Row,Col,Button,Thumbnail } from 'react-bootstrap';
import './css/HotProducts.css';

class HotProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          iphone: [], samsung: [], sony: [],
          lexus: [], toyota: [], hyundai: [],
          sony2: [], xbox: [], play: [],
          room: [], kit: [], livingroom: [],
          dress: [], watch: [], perform: []
        };
        this.GetMax = this.GetMax.bind(this);
      }
    
      componentDidMount() {
        var city = this.props.data.cityname;
        Promise.all([
        fetch("https://jeddah-bats.herokuapp.com/hotproduct/"+city+"/اجهزة/ايفون"),
        fetch("https://jeddah-bats.herokuapp.com/hotproduct/"+city+"/اجهزة/سامسونج"),
        fetch("https://jeddah-bats.herokuapp.com/hotproduct/"+city+"/اجهزة/سوني"),
        fetch("https://jeddah-bats.herokuapp.com/hotproduct/"+city+"/حراج/لكزس"),
        fetch("https://jeddah-bats.herokuapp.com/hotproduct/"+city+"/حراج/تويوتا"),
        fetch("https://jeddah-bats.herokuapp.com/hotproduct/"+city+"/حراج/هونداي"),
        fetch("https://jeddah-bats.herokuapp.com/hotproduct/"+city+"/العاب فيديو/سوني"),
        fetch("https://jeddah-bats.herokuapp.com/hotproduct/"+city+"/العاب فيديو/اكس بوكس"),
        fetch("https://jeddah-bats.herokuapp.com/hotproduct/"+city+"/العاب فيديو/بلايستيشن"),
        fetch("https://jeddah-bats.herokuapp.com/hotproduct/"+city+"/اثاث/غرف"),
        fetch("https://jeddah-bats.herokuapp.com/hotproduct/"+city+"/اثاث/مطبخ"),
        fetch("https://jeddah-bats.herokuapp.com/hotproduct/"+city+"/اثاث/كرسي"),
        fetch("https://jeddah-bats.herokuapp.com/hotproduct/"+city+"/أزياء/فستان"),
        fetch("https://jeddah-bats.herokuapp.com/hotproduct/"+city+"/أزياء/ساعة"),
        fetch("https://jeddah-bats.herokuapp.com/hotproduct/"+city+"/أزياء/عطور")
        ]).then(([res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11, res12, res13, res14, res15]) => 
        Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json(), res7.json(), 
            res8.json(), res9.json(), res10.json(), res11.json(), res12.json(), res13.json(), res14.json(), res15.json()]))
          .then(
            ([iphone, samsung, sony, lexus, toyota, hyundai, sony2, xbox, play,room, kit, livingroom, dress, watch, perform]) => {
              this.setState({
                isLoaded: true,
                iphone: iphone, samsung: samsung, sony: sony,
                lexus: lexus, toyota: toyota, hyundai: hyundai,
                sony2: sony2, xbox: xbox, play: play,
                room: room, kit: kit, livingroom: livingroom,
                dress: dress, watch: watch, perform: perform
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

        GetMax(v1,v2, v3){
        var max =v1.total;
        if (max<v2.total){
            max=v2.total;
        }
        else if(max<v3.total){
            max=v3.total;
        }
        return max._id;
      }

    render() {
        const { error, isLoaded, iphone, samsung, sony, lexus, toyota, hyundai, sony2, xbox, play,room, kit, livingroom, dress, watch, perform } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <Loading/>; 
        } else if (iphone.length==0) {
          return <NotFound/>; 
        }else {
        return (
            <div id="maindivh">
                <Grid>
                <h2 id="hotproducts">الـمُـنـتـجـات الـأكـثـر رواجـاً فـي {this.props.data.cityname}</h2>
                    <Row>
                        <Col xs={6} md={4}>
                        <Thumbnail alt="p1" src="assets/block.png" >
                                    <h2 className='products'>{sony2[0].total} {xbox[0].total} {play[0].total}</h2>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail alt="p2" src="assets/block.png" >
                                    <h2 className='products'>{lexus[0].total} {toyota[0].total} {hyundai[0].total}</h2>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail alt="p3" src="assets/block.png" >
                                    <h2 className='products'>{iphone[0].total} {samsung[0].total} {samsung[0].total}</h2>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail alt="p6" src="assets/block.png" >
                                    <h2 className='products'>{room[0].total} {kit[0].total} {livingroom[0].total}</h2>
                        </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                        <Thumbnail alt="p5" src="assets/block.png" >
                                    <h2 className='products'>{dress[0].total} {watch[0].total} {perform[0].total}</h2>
                        </Thumbnail>
                        </Col>                
                    </Row>
                </Grid>
            </div>
        );
    }
}
}

export default HotProducts;