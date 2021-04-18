import React, {useContext} from "react";
import {LanguageContext} from "../../App";
import faqJson from "../../contrib/content/faq";
import image from "../../contrib/Volunteer Page 3.png";
import css from "../views/volunteer/VolunteerView.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function VolunteerSlide3(props) {
  const languageContext = useContext(LanguageContext);
  let faq = faqJson.en;
  if (languageContext.language === 'my') {
    faq = faqJson.my;
  }
  return (
        <div className="slide1ContentPositioning" style={{minHeight: window.innerHeight-57}}>
          <Container style={{height: '100%'}} fluid>
            <Row style={{height: '100%'}}>

              <Col xs={12} sm={12} md={6} lg={6} style={{height: '100%'}}>
                <img src={image} width="90%" height="80%" style={{marginTop: '19%'}}/>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <div className="slide2Text">
                  <h1 className="veryLargeHeadline">What it’s like being a Listening Volunteer:</h1>
                  <div className="largeHeadline" style={{marginTop:'5%', fontWeight: 'bold'}}>
                    <br/>
                    <div>Listening volunteers are there for anyone who need someone.</div>
                    <br/>
                    <br/>
                    <div>Our trained volunteers provide a safe space for fellow students to talk and share, while keeping the utmost confidentiality of the conversation.</div>
                    <br/>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
  )
}

export default VolunteerSlide3;
