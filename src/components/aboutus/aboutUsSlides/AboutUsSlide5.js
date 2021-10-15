import React from "react";
import image from "../../../contrib/About Us Page 5.svg";
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
                    <img src={image} width="100%" height="90%"/>
                </Col>
                }
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="slide2Text">
                        <div>
                            <h2>What To Expect:</h2>
                            <div style={{marginTop: '5%'}}>
                                <p>You are ensured that:</p>
                                <p>We <span className="slide5Highlight">don’t judge</span></p>
                                <p>We <span className="slide5Highlight">won’t tel l you what to do</span></p>
                                <p>Everything is <span className="slide5Highlight">confidential and anonymous.</span></p>
                            </div>
                        </div>
                    </div>
                </Col>
                {window.innerWidth <= 576 &&
                <Col xs={12} sm={12} md={6} lg={6}>
                    <img src={image} width="100%" height="90%"/>
                </Col>
                }
            </Row>
        </div>
    )
}

export default AboutUsSlide3;
