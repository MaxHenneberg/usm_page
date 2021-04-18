import React, {useContext} from "react";
import {LanguageContext} from "../../App";
import faqJson from "../../contrib/content/faq";
import image from "../../contrib/Volunteer Page 2.png";
import css from "../views/volunteer/VolunteerView.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function VolunteerSlide2(props) {
  const languageContext = useContext(LanguageContext);
  let faq = faqJson.en;
  if (languageContext.language === 'my') {
    faq = faqJson.my;
  }
  return (
        <div className="slide1ContentPositioning" style={{minHeight: window.innerHeight-57}}>
          <Container style={{height: '100%'}} fluid>
            <Row style={{height: '100%'}}>
              {window.innerWidth <= 576 &&
              <Col xs={12} sm={12} md={6} lg={6}>
                <img src={image} width="100%" height="100%"/>
              </Col>
              }
              <Col xs={12} sm={12} md={6} lg={6}>
                <div className="slide2Text">
                  <h1 className="veryLargeHeadline">Become a LineHayat Listening Volunteer</h1>
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

export default VolunteerSlide2;
