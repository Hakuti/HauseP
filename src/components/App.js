import React, { Component } from "react";
import MobilePartyCard from "./MobilePartyCard";
import PartyCard from "./PartyCard";
import jsonResponse from "../list"
import Responsive from 'react-responsive';
import { Col, Row, Layout, Carousel, Icon } from 'antd';
import "./app.css"
import CarouselComponent from "./CarouselComponent";
import StarRatingComponent from 'react-star-rating-component';

const { Content } = Layout;
const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class App extends Component {

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


// onStarClick(nextValue, prevValue, name) {
//   this.setState({rating: nextValue});
// }

  

  render() {
    const aName = jsonResponse;
    console.log(jsonResponse);

    const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
    };

    // const { rating } = this.state;

    return (
      
      <Content id="app-content" style={{marginTop: '100px', height: "1000px"}}>
      <h1 className="app-h1">Welcome, Jean</h1>

      <Row type="flex" align="middle">

      {/* //From here */}
      <div className="mobile-card-nav" style={{background: "orange"}}>
      <CarouselComponent></CarouselComponent>
      <CarouselComponent></CarouselComponent>

      {/* <div className="outer-carousel-c">
      <Icon type="left" onClick={this.previous} className="left-arrow-c" style={{color: "white"}} />

      <div className="carousel-container">
        
        <Carousel ref={node => (this.carousel = node)} {...props}>
          <div><div className="img-container-carousel"><img src="https://images.pexels.com/photos/2030847/pexels-photo-2030847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img></div></div>
          <div><div className="img-container-carousel"><img src="https://images.pexels.com/photos/1449791/pexels-photo-1449791.jpeg?auto=compress&cs=tinysrgb&h=650&w=740"></img></div></div>
          <div><div className="img-container-carousel"><img src="https://images.pexels.com/photos/2030847/pexels-photo-2030847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img></div></div>
          <div><div className="img-container-carousel"><img src="https://images.pexels.com/photos/2030847/pexels-photo-2030847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img></div></div>

        </Carousel>
      </div>
      <Icon type="right" onClick={this.next} className="right-arrow-c" style={{color: "white"}}/>
      </div> */}
      </div>
        {/*To Here is carousel code */}
        </Row>
      <h2 className="app-h2">Featured Parties for you</h2>
    
     
      <Row type="flex" align="middle" >
        
        
        <Mobile>
        <div className="mobile-card-nav">
        {aName.map((item) => {
          return(<MobilePartyCard key={item.id} id={item.id} title={item.first_name} username={item.last_name} imgSrc={item.img_src} ></MobilePartyCard>);
        })}
        </div>
       </Mobile>

       <Default>
       {aName.map((item) => {
          return(<PartyCard key={item.id} id={item.id} title={item.first_name} username={item.last_name} imgSrc={item.img_src}></PartyCard>);
        })}
       </Default>
       

        
      </Row>
      
      </Content>
    );
  }
}

export default App;