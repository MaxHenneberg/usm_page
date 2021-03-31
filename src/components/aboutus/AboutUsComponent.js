import React, {useContext} from "react";
import {LanguageContext} from "../../App";
import "./AboutUsComponent.css"

import aboutus1 from "./contrib/loveUsm.png";
import aboutus2 from "./contrib/usm2.jfif";
import aboutus3 from "./contrib/aboutus3.jpg";
import aboutUsJson from "../../contrib/content/aboutus.json";

function AboutUsComponent(props) {
  const languageContext = useContext(LanguageContext);
  let aboutUs = aboutUsJson.en;
  if (languageContext.language === 'my') {
    aboutUs = aboutUsJson.my;
  }
  return (
      <div className="aboutus" id="aboutus">
        <h1>{aboutUs.title}</h1>
        <a name='aboutus'/>
        <div className="d-md-flex align-items-md-center justify-content-md-center">
            <div className="float-md-left w-md-25 w-smd-100 d-inline-block h-100">
              <div className="horizontalCenter">
                <img className="aboutUsImg float-smd-left" src={aboutus1}/>
                <img className="aboutUsImg float-smd-left" src={aboutus2}/>
                <img className="aboutUsImg float-smd-left" src={aboutus3}/>
              </div>
            </div>
            <div className="float-md-left w-md-75 w-smd-100 d-inline-block h-100">
              <div className="w-md-50 w-smd-100 horizontalCenter aboutUsContent">
                {aboutUs.text}
              </div>
            </div>
        </div>
      </div>
  )
}

export default AboutUsComponent;
