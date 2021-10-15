import React from "react";
import image from "../../../contrib/About Us Page 2.gif";
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
                            <h2>Who We Are:</h2>
                            <div style={{margin: '5% 0 0 0'}}>
                                <p>LineHayat is a Listening Service that aims to provide peer support to Universiti
                                    Sains Malaysia (USM) students.</p>
                                <p>This service is run by students for students to ensure comfortable communication and
                                    it is completely free-of-charge.</p>
                                <p>We also understand the need to maintain privacy when it comes to talking about
                                    problems.</p>
                                <p>Therefore, we are established on these three main ideas:</p>
                                <ul style={{width: 'fit-content', textAlign: 'center'}}
                                    className="whoWeAreList crimson-font list-font">
                                    <li style={{width: 'fit-content'}}>
                                        Anonymous peer support
                                    </li>
                                    <li style={{width: 'fit-content'}}>
                                        Trained volunteerism
                                    </li>
                                    <li style={{width: 'fit-content'}}>
                                        Peer capacity building
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
