import React, { Component } from "react";
// import MobilePartyCard from "./MobilePartyCard";
// import PartyCard from "./PartyCard";
// import jsonResponse from "../list"
import Responsive from 'react-responsive';
import { Col, Row, Layout, Carousel, Icon } from 'antd';
import "./index.css"
// import StarRatingComponent from 'react-star-rating-component';

const { Content } = Layout;
const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class CarouselComponent extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.carousel = React.createRef();
      }
    
      next() {
        this.carousel.next();
      }
      previous() {
        this.carousel.prev();
      }


      render() {
        // const aName = jsonResponse;
        // console.log(jsonResponse);
    
        const props = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true
        };

        return(

        <div className="outer-carousel-c">
      <Icon type="left" onClick={this.previous} className="left-arrow-c" style={{color: "white"}} />

      <div className="carousel-container">
        
        <Carousel ref={node => (this.carousel = node)} {...props}>
          <div><div className="img-container-carousel"><img src="https://images.pexels.com/photos/2030847/pexels-photo-2030847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img></div></div>
          <div><div className="img-container-carousel"><img src="https://images.pexels.com/photos/1449791/pexels-photo-1449791.jpeg?auto=compress&cs=tinysrgb&h=650&w=740"></img></div></div>
          <div><div className="img-container-carousel"><img src="https://images.pexels.com/photos/1537638/pexels-photo-1537638.jpeg?auto=compress&cs=tinysrgb&h=650&w=740"></img></div></div>
          <div><div className="img-container-carousel"><img src="https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img></div></div>

        </Carousel>
      </div>
      <Icon type="right" onClick={this.next} className="right-arrow-c" style={{color: "white"}}/>
      </div>
        );
    }
}

export default CarouselComponent;