import React from "react";
import image from "../../../contrib/Volunteer Page 2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutUsSlide2(props) {
    // const languageContext = useContext(LanguageContext);
    // let faq = faqJson.en;
    // if (languageContext.language === 'my') {
    //   faq = faqJson.my;
    // }
    return (
        <div className="slide1ContentPositioning">
            <Row style={{height: '100%'}}>
                {window.innerWidth <= 576 &&
                <Col xs={12} sm={12} md={6} lg={6}>
                    <img src={image} width="80%" height="80%"/>
                </Col>
                }
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="slide2Text">
                        <div>
                            <h1>Who We Are:</h1>
                            <div style={{marginTop: '5%'}}>
                                <p>LineHayat is a Listening Service that aims to provide peer support to Universiti
                                    Sains Malaysia (USM) students.</p>
                                <p>This service is run by students for students to ensure comfortable communication and
                                    it is completely free-of-charge.</p>
                                <p>We also understand the need to maintain privacy when it comes to talking about
                                    problems.</p>
                                <p>Therefore, we are established on these three main ideas:</p>
                                <ul style={{width: 'fit-content', margin: '0 auto'}}>
                                    <li style={{width: 'fit-content'}}>
                                        <p style={{fontWeight:'bold'}}>Anonymous peer support</p>
                                    </li>
                                    <li style={{width: 'fit-content'}}>
                                        <p style={{fontWeight:'bold'}}>Trained volunteerism</p>
                                    </li>
                                    <li style={{width: 'fit-content'}}>
                                        <p style={{fontWeight:'bold'}}>Peer capacity building</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
                {window.innerWidth > 576 &&
                <Col xs={12} sm={12} md={6} lg={6}>
                    <img src={image} width="80%" height="80%"/>
                </Col>
                }
            </Row>
        </div>
    )
}

export default AboutUsSlide2;
