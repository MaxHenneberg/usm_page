import React, {useContext} from "react";
import {LanguageContext} from "../../App";
import "./AboutUsComponent.css"

import aboutUsJson from "../../contrib/content/aboutus.json";
import AboutUsSlide2 from "./aboutUsSlides/AboutUsSlide2";
import AboutUsSlide3 from "./aboutUsSlides/AboutUsSlide3";
import AboutUsSlide4 from "./aboutUsSlides/AboutUsSlide4";
import AboutUsSlide5 from "./aboutUsSlides/AboutUsSlide5";
import Button from "react-bootstrap/Button";

function AboutUsComponent(props) {
    const languageContext = useContext(LanguageContext);
    let aboutUs = aboutUsJson.en;
    if (languageContext.language === 'my') {
        aboutUs = aboutUsJson.my;
    }
    return (
        <div className="aboutus">
            <h1 id="aboutus">{aboutUs.title}</h1>
            <br/>
            <a name='aboutus'/>
            <AboutUsSlide2/>
            <AboutUsSlide3/>
            <AboutUsSlide4/>
            <AboutUsSlide5/>
            <Button variant="primary" href="#/help" className="buttonHome">Meet the Team</Button>
        </div>
    )
}

export default AboutUsComponent;
