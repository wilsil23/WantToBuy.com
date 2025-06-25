import React from 'react';
import templatePhoto from "../assets/download.jpg";

function BuyPage() {
  return (
    <div style={{ padding: '20px' }}>
      <Image top="100px" left="0px" photo={templatePhoto} price="$50" location="Milwaukee, WI"/>
      <Image top="400px" left="0px" photo={templatePhoto} price="$50" location="Phoenix, AZ"/>
      <Image top="100px" left="550px" photo={templatePhoto} price="$50" location="Phoenix, AZ"/>
    </div>
    
  );
}

function Image({top, left, photo, price, location}){
  const containerStyle = {
    position: "absolute", 
    top: top,
    left: left,
    width: "400px",
    textAlign: "center", 
  };

  return (
    <figure style={containerStyle}>
      <img src={photo} alt="Photo" style={{ width: "100%" }} />
      <figcaption>
        <div>{price}</div>
        <div>{location}</div>
      </figcaption>
    </figure>
  );
}

export default BuyPage;