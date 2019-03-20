import React, { Component } from "react";
import Responsive from 'react-responsive';
import { Col, Card } from "antd";
import StarRatings from 'react-star-ratings';
import { NavLink } from "react-router-dom";


import './index.css';


const { Meta } = Card;
const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;


class MobilePartyCard extends Component {
    
    constructor() {
        super();
        this.state = {
            rating: 4
        }
    }
    
    
    
    


    render(){
    const { id, username, title, imgSrc } = this.props
    const { rating } = this.state;
    

    // console.log(id);
    return(
        
       
        <div className="card-container">
             <div className="card-header-content"> 
             <p>21+</p>
             </div>
             <NavLink to="/posts">
             <div className="c-img-div">
            <img src={imgSrc}></img>
             </div>
             </NavLink>
             <p id="title">{title}</p>
             <p id="username">@{username} </p>
            <div id="stars">
             </div>
         
         </div>
        
   
    
   
    
   
    // <Col xs={24} s={24} md={12} lg={6} style={{}}>
    // {
        /*
        Width min 992
        */
    // }
    // <Desktop>
    //     <div className="card-container">
    //         <div className="card-header-content"> 
    //         <p>21+</p>
    //         </div>
    //         <div className="c-img-div">
    //         <img src="https://images.pexels.com/photos/1694348/pexels-photo-1694348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
    //         </div>
    //         <p id="title">Jean's Grad Bash</p>
    //         <p id="username">@WildBoyJean  </p>
    //         <div id="stars">
    //          </div>
    //     </div>
        
        
    
    /* <Card
    hoverable={true}
    style={{ width: 240, borderRadius: "5px", margin: "0 auto", background: "transparent"}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" 
    
    />}
    >
   
    <Meta
        style={{textAlign: "center"}}
      title="Europe Street beat"
      description={id}
    />
  </Card> */

    // </Desktop>


    
        /*
        Width min 768 to 991
        */
    
    // <Tablet>
    // <div className="card-container" style={{width: "340px"}}>
    //         <div className="card-header-content"> 
    //         <p>21+</p>
    //         </div>
    //         <div className="c-img-div">
    //         <img src="https://images.pexels.com/photos/1694348/pexels-photo-1694348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
    //         </div>
    //         <p id="title">Jean's Grad Bash</p>
    //         <p id="username">@WildBoyJean  </p>
    //         <div id="stars">
    //          </div>
    //     </div>
    /* <Card
    hoverable={true}
    style={{ width: 340, borderRadius: "5px", margin: "40px auto", marginBottom: "10px"}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" 
    
    />}
    >
   
    <Meta
        style={{textAlign: "center"}}
      title="Europe Street beat"
      description={id}
    />
  </Card> */
    // </Tablet>

  
        /*
        Width min 776
        */
    
//   <Mobile>
//   <div className="card-container">
//             <div className="card-header-content"> 
//             <p>21+</p>
//             </div>
//             <div className="c-img-div">
//             <img src="https://images.pexels.com/photos/1694348/pexels-photo-1694348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
//             </div>
//             <p id="title">Jean's Grad Bash</p>
//             <p id="username">@WildBoyJean  </p>
//             <div id="stars">
//              </div>
//     </div>
  /* <Card
    hoverable={true}
    style={{ width: 340, borderRadius: "5px", margin: "0 auto", marginBottom: "20px"}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" 
    
    />}
    >
   
    <Meta
        style={{textAlign: "center"}}
      title="Europe Street beat"
      description={id}
    />
  </Card> */
//   </Mobile>


//   </Col>
 
    );

    }

}

export default MobilePartyCard;