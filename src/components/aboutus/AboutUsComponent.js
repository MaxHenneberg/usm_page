import React, {useContext} from "react";
import {LanguageContext} from "../../App";
import "./AboutUsComponent.css"

import aboutus1 from "./contrib/loveUsm.png";
import aboutUsJson from "../../contrib/content/aboutus.json";
import {Col, Container, Row} from "react-bootstrap";

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
            <Container fluid>
                <Row>
                    <Col sm={true} lg={5}>
                        <img className="aboutUsImg" src={aboutus1}/>
                    </Col>
                    <Col sm={true} lg={7}>
                        <div className="aboutUsContent" dangerouslySetInnerHTML={{__html:aboutUs.text}}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUsComponent;
