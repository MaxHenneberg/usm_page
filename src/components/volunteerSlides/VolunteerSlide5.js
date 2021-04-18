import React, {useContext} from "react";
import {LanguageContext} from "../../App";
import faqJson from "../../contrib/content/faq";
import image from "../../contrib/Volunteer page 5.png";
import css from "../views/volunteer/VolunteerView.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function VolunteerSlide5(props) {
  const languageContext = useContext(LanguageContext);
  let faq = faqJson.en;
  if (languageContext.language === 'my') {
    faq = faqJson.my;
  }
  return (
        <div id="slide4Container" className="slide1ContentPositioning slide5Bg" style={{minHeight: window.innerHeight-57}}>
          <Container style={{height: '100%'}} fluid>
            <Row style={{height: '100%'}}>
              <Col xs={12} sm={12} md={6} lg={6}>
                <img src={image} width="100%" height="100%"/>
              </Col>
              <Col id="slide4TextColumn" xs={12} sm={12} md={6} lg={6}>
                <div className="">
                  <h1 className="veryLargeHeadline blue">Interested ?</h1>
                  <div style={{marginTop:'5%', fontWeight: 'bold'}}>
                    <h2 className="largeHeadline" style={{textAlign:'left'}}>Be a Listening Volunteer!</h2>
                    <div className="largeHeadline" style={{textAlign:'left'}}>Sign up <a href="http://www.google.com" target="_blank">here</a>.</div>
                  </div>
                  <div style={{marginTop:'5%', fontWeight: 'bold'}}>
                    <h2 className="largeHeadline" style={{textAlign:'left'}}>Need more information?</h2>
                    <div className="largeHeadline" style={{textAlign:'left'}}>Visit FAQ <a href="/#faq">here</a>.</div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
  )
}

export default VolunteerSlide5;
