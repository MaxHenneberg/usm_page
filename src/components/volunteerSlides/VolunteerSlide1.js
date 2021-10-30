import React, {useContext} from "react";
import {LanguageContext} from "../../App";
import faqJson from "../../contrib/content/faq";
import image from "../../contrib/Volunteer Page 1.png";
import logo from "../../contrib/lineHayatLogo.svg"
import css from "../views/volunteer/VolunteerView.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function VolunteerSlide1(props) {
  const languageContext = useContext(LanguageContext);
  let faq = faqJson.en;
  if (languageContext.language === 'my') {
    faq = faqJson.my;
  }
  return (
        <div style={{minHeight: window.innerHeight-57, height:'fit-Content'}}>
          {window.innerWidth > 576  && <img src={image} height={window.innerHeight-57} width="100%" className="slide1Img"/>}
          <div className="hover hoverContentSlides">
            <Container fluid  style={{height: '100%'}}>
              <br/>
              <Row>
                <Col sm={0} xs={0} md={0} lg={10}/>
                <Col sm={12} xs={12} md={12} lg={2}><img src={logo} width="250px" height="250px"/></Col>
              </Row>
              <br/>
              <br/>
              <Row>
                <Col>
                  <h1 className="veryLargeHeadline green">Welcome to LineHayat</h1>
                  <h2 className="largeHeadline">We are recruiting Listening Volunteers</h2>
                </Col>
              </Row>
              <br/>
              <br/>
              <Row>
                <Col lg={5}/>
                <Col lg={2}>
                  <Button className="slide1Button greenBg">JOIN NOW</Button>
                </Col>
                <Col lg={5}/>
              </Row>
            </Container>
          </div>
        </div>
  )
}

export default VolunteerSlide1;
