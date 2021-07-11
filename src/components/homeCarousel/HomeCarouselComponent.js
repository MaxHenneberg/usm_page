import React, {useContext} from "react";
import {LanguageContext} from "../../App";
import Carousel from "react-bootstrap/Carousel";
import "./HomeCarouselComponent.css";
import usmMain from "../../contrib/usmMain.png";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../contrib/lineHayatLogo.png";

function HomeCarouselComponent(props) {
    const languageContext = useContext(LanguageContext);
    return (
        <div>
            <div className="carouselContainer">
                <Carousel className="carousel" controls="false" indicators="false">
                    <Carousel.Item className="carouselItem">
                        <div className="firstItem">
                            <h3>LineHayat Is Your Friendly And Private Platform To Lend You An Ear.</h3>
                            <p>This platform, based in Universiti Sains Malaysia (USM), offers peer support
                                that is fully run by students for students (free of charge).</p>
                            <p>LineHayat cares about all university students' well-being and continues to
                                make every effort to provide emotional support for all students throughout
                                these challenging days.</p>
                            <p>With LineHayat, your privacy is protected. You can express yourself freely and
                                anonymously via live texting or phone call.</p>
                            <p>We are always here to listen!</p>
                            <p>#YouShareWeCare</p>
                            <p className="bold">We are online from Monday to Sunday from 10pm to 2am,excluding public holidays.</p>
                            <p className="bold">Access latest news <a href="">here</a></p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="carouselItem">
                        <div className="secondItemContainer">
                            <Container fluid style={{height: '100%'}}>
                                <Row>
                                    <Col sm={12} xs={12} md={12} lg={4}><Image src={usmMain} className="secondItemImage"/></Col>
                                    <Col sm={12} xs={12} md={12} lg={4}><Image src={usmMain} className="secondItemImage"/></Col>
                                    <Col sm={12} xs={12} md={12} lg={4}><Image src={usmMain} className="secondItemImage"/></Col>
                                </Row>
                            </Container>
                        </div>
                        {/*<div className="secondItemContainer">*/}
                        {/*    <div className="secondItem">*/}
                        {/*        <Image src={usmMain} className="secondItemImage"/>*/}
                        {/*        <Image src={usmMain} className="secondItemImage"/>*/}
                        {/*        <Image src={usmMain} className="secondItemImage"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </Carousel.Item>
                </Carousel>
            </div>
            <Container style={{height: '100%', width: 'fit-content'}}>
                <Row style={{width: 'fit-content', marginRight:'0'}}>
                    <Col sm={12} xs={12} md={12} lg={6}><Button variant="light" href="#/help" className="buttonHome"><i className="fas fa-comments"></i>Live Chat</Button></Col>
                    <Col sm={12} xs={12} md={12} lg={6}><Button variant="light" className="buttonHome"><i className="fas fa-phone-alt"></i> Call Us</Button></Col>
                </Row>
            </Container>
        </div>

    )
}

export default HomeCarouselComponent;
