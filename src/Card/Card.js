// import React, {Component} from 'react';

// import * as rb from 'react-bootstrap';

// const Card = class Card extends Component {
//     render() {
//         return (
//             <rb.Card style={{ width: '15rem', margin: '15px', display: 'flex'}}>
//             <rb.Card.Img variant="top" style={{height: '10rem' }} src={this.props.url} alt={"Carlie Anglemire"}/>
//             <rb.Card.Body>
//                 <rb.Card.Title>{this.props.title}</rb.Card.Title>
//                 <rb.Card.Text>
//                     {this.props.text}
//                 </rb.Card.Text>
//                 <rb.Button variant="primary">Go somewhere</rb.Button>
//             </rb.Card.Body>
//             </rb.Card>
//         );
//     }
// }

// export default Card;

// import React from "react";
// import "./Card.css";
// import food from "../Images/landscape.jpg"; // Tell webpack this JS file uses this image
// import heartOutline from "../Images/landscape.jpg"; // Tell webpack this JS file uses this image
// import heartFill from "../Images/landscape.jpg"; // Tell webpack this JS file uses this image

// export default function Card(props) {
//   return (
//     <div className="card">
//       <div className="card-header">
//         <div className="profile">
//           <span className="letter">{props.author[0]}</span>
//         </div>
//         <div className="card-title-group">
//           <h5 className="card-title">{props.title}</h5>
//           <div className="card-date">{props.date}</div>
//         </div>
//       </div>
//       <img className="card-image" src={food} alt="Logo" />
//       <div className="card-text">{props.description}</div>
//       <div className="card-like-bar">
//         {props.liked ? (
//           <img className="card-like-icon" src={heartFill} alt="Logo" />
//         ) : (
//           <img className="card-like-icon" src={heartOutline} alt="Logo" />
//         )}
//         <div className="like-text">
//           <b>{props.likeCount}</b> kişi bu tarifi beğendi.
//         </div>
//       </div>
//     </div>
//   );
// }

import Flippy, { FrontSide, BackSide } from 'react-flippy';
// ... component class
const Card = () => {
    return (
            // .. return
          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
          >
            <FrontSide
              style={{
                backgroundColor: '#41669d',
              }}
            >
              RICK
            </FrontSide>
            <BackSide
              style={{ backgroundColor: '#175852'}}>
              ROCKS
            </BackSide>
          </Flippy>
    );
}

export default Card;