import React from "react";
import image from "../../../contrib/About Us Page 4.svg";
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
                    <img src={image} width="100%" height="100%"/>
                </Col>
                }
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="slide2Text">
                        <div>
                            <h1>What We Do:</h1>
                            <div style={{marginTop: '5%'}}>
                                <p>We are always here to lend a listening ear on for whatever
                                    you may be facing right now. We listen.</p>
                                <p>Feel free to reach us through our call or chat services.</p>
                                <p>You may want to talk about:</p>
                                <ul style={{width: 'fit-content'}}>
                                    <li style={{width: 'fit-content'}}>
                                        <p style={{fontWeight:'bold'}}>Study stress</p>
                                    </li>
                                    <li style={{width: 'fit-content'}}>
                                        <p style={{fontWeight:'bold'}}>Confusions</p>
                                    </li>
                                    <li style={{width: 'fit-content'}}>
                                        <p style={{fontWeight:'bold'}}>Feeling lost/alone/empty</p>
                                    </li>
                                    <li style={{width: 'fit-content'}}>
                                        <p style={{fontWeight:'bold'}}>Life challenges</p>
                                    </li>
                                    <li style={{width: 'fit-content'}}>
                                        <p style={{fontWeight:'bold'}}>Anything that concerns you</p>
                                    </li>
                                </ul>
                                <h4>#You Share, We Care</h4>
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
