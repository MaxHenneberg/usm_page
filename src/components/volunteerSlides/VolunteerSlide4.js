import React, {useContext} from "react";
import {LanguageContext} from "../../App";
import faqJson from "../../contrib/content/faq";
import image from "../../contrib/Volunteer Page 4.png";
import css from "../views/volunteer/VolunteerView.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function VolunteerSlide4(props) {
  const languageContext = useContext(LanguageContext);
  let faq = faqJson.en;
  if (languageContext.language === 'my') {
    faq = faqJson.my;
  }
  return (
        <div id="slide4Container" className="slide1ContentPositioning" style={{minHeight: window.innerHeight-57}}>
          <Container style={{height: '100%'}} fluid>
            <Row style={{height: '100%'}}>
              {window.innerWidth <= 576 &&
              <Col xs={12} sm={12} md={6} lg={6}>
                <img src={image} width="100%" height="100%"/>
              </Col>
              }
              <Col id="slide4TextColumn" xs={12} sm={12} md={6} lg={6}>
                <div className="slide4Text greenBg horizontalCenter">
                  <h1 className="veryLargeHeadline blue">Who are we looking for? </h1>
                  <div style={{marginTop:'5%', fontWeight: 'bold'}}>
                    <h2 className="largeHeadline">Qualities of our volunteers:</h2>
                    <ul style={{width: 'fit-content'}} className="horizontalCenter largeHeadline">
                      <li >Empathetic</li>
                      <li>Confidential</li>
                      <li>Open-minded</li>
                      <li>Good communication skills</li>
                    </ul>
                  </div>
                </div>
              </Col>
              {window.innerWidth > 576 &&
              <Col xs={12} sm={12} md={6} lg={6}>
                <img src={image} width="100%" height="100%"/>
              </Col>
              }
            </Row>
          </Container>
        </div>
  )
}

export default VolunteerSlide4;
