import React from "react";
import image from "../../../contrib/About Us Page 3.gif";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutUsSlide3(props) {
    // const languageContext = useContext(LanguageContext);
    // let faq = faqJson.en;
    // if (languageContext.language === 'my') {
    //   faq = faqJson.my;
    // }
    return (
        <div className="slide1ContentPositioning">
            <Row style={{height: '100%'}}>
                {window.innerWidth > 576 &&
                <Col xs={12} sm={12} md={6} lg={6}>
                    <img src={image} width="80%" height="80%"/>
                </Col>
                }
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="slide2Text">
                        <div>
                            <h1>Who We Are Not: </h1>
                            <div style={{marginTop: '5%'}}>
                                <p>Line Hayat is not a counselling or a professional mental health service.</p>
                                <p>We are not associated with any mental health professionals such as psychologists,
                                    psychiatrists, counsel lors, therapists, or social workers.</p>
                                <p>We also understand the need to maintain privacy when it comes to talking about
                                    problems.</p>
                                <p>We are volunteers that provide only emotional support.</p>
                                <p>Users should always seek professional help if possible.</p>
                            </div>
                        </div>
                    </div>
                </Col>
                {window.innerWidth <= 576 &&
                <Col xs={12} sm={12} md={6} lg={6}>
                    <img src={image} width="80%" height="80%"/>
                </Col>
                }
            </Row>
        </div>
    )
}

export default AboutUsSlide3;
