import classes from "./Hero.module.css";
import React from "react";
import Image from "react-bootstrap/Image";

import HeroImage from "../../../../contrib/volunteer/hero.png";

function Hero() {
  return (
    <div className={classes.hero}>
      <div style={{"grid-area": "image", "display": "flex"}}>
        <Image src={HeroImage} alt="LineHayat team" />
      </div>
      <div style={{"grid-area": "heading", "textAlign": "center"}}>
        <h1 className="berkshire-font">
          Welcome to LineHayat
        </h1>
        <h2>
            We are recruiting Listening Volunteers.
        </h2>
      </div>
      <div style={{"grid-area": "text", "textAlign": "center"}}>
        <p>
          LineHayat Listening Volunteers are a group of compassionate USM student volunteers who genuinely wish to provide peer support for their Sharers, the USM students. Our well-trained Listening Volunteers will be providing a safe space for all Sharers to share and talk based on their willingness while maintaining the confidentiality of the conversation.
        </p>
      </div>
    </div>
  )
}

export default Hero;