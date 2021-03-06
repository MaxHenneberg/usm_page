import React, {useContext} from "react";
import {LanguageContext} from "../../App";
import "./AboutUsComponent.css"

import aboutus1 from "./contrib/loveUsm.png";
import aboutus2 from "./contrib/usm2.jfif";
import aboutus3 from "./contrib/aboutus3.jpg";

function AboutUsComponent(props) {
  const languageContext = useContext(LanguageContext);
  return (
      <div className="aboutus">
        <h1>About us</h1>
        <a name='aboutus'/>
        <div className="d-md-flex align-items-md-center justify-content-md-center">
            <div className="float-md-left w-md-25 w-smd-100 d-inline-block h-100">
              <img className="aboutUsImg float-smd-left" src={aboutus1}/>
              <img className="aboutUsImg float-smd-left" src={aboutus2}/>
              <img className="aboutUsImg float-smd-left" src={aboutus3}/>
            </div>
            <div className="float-md-left w-md-75 w-smd-100 d-inline-block h-100">
              <div className="w-md-50 w-smd-100 horizontalCenter aboutUsContent">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </div>
            </div>
        </div>
      </div>
  )
}

export default AboutUsComponent;
