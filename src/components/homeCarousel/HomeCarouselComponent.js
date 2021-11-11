import React, {useContext} from "react";
import {LanguageContext} from "../../App";
import Carousel from "react-bootstrap/Carousel";
import "./HomeCarouselComponent.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import carousel1 from "../../contrib/homeCarousel/carousel1.svg"
import carousel2 from "../../contrib/homeCarousel/carousel2.svg"
import carousel3 from "../../contrib/homeCarousel/carousel3.svg"
import carousel4 from "../../contrib/homeCarousel/carousel4.svg"
import carousel5 from "../../contrib/homeCarousel/carousel5.svg"
import carousel6 from "../../contrib/homeCarousel/carousel6.svg"

import callIcon from "../../contrib/callIcon.svg";
import chatIcon from "../../contrib/chatIcon.svg";

function HomeCarouselComponent(props) {
    const languageContext = useContext(LanguageContext);
    return (
        <div>
            <div className="carouselContainer">
                <Carousel className="carousel" controls="false" indicators="false">
                    <Carousel.Item className="carouselItem">
                        <div className="firstItem">
                            <h4 className="mb-lg-5 crimson-font">LineHayat Is Your Friendly And Private Platform To
                                Lend You An Ear.</h4>
                            <p>This platform, based in Universiti Sains Malaysia (USM), offers peer support that is fully run by students for students, free of charge.</p>
                            <p>LineHayat cares about all university students' well-being and continues to make every effort to provide emotional support for all students throughout these challenging days.</p>
                            <p>With LineHayat, your privacy is protected. You can express yourself freely and anonymously to our Listening Volunteers via Call or Live Chat on our website.</p>
                            <p>We are always here to listen!</p>
                            <p style={{color:'#5B4C43'}}>#YouShareWeCare</p>
                            <p className="highlight">Operation hours to be
                                confirmed</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="carouselItem">
                        <div className="secondItemContainer">
                            <Container fluid style={{height: '100%'}}>
                                <Row>
                                    <Col sm={12} xs={12} md={12} lg={12}>
                                        <h4
                                            className="berkshire-font mb-5">LineHayat Anonymous Chat
                                            Service - How it
                                            Works?</h4></Col>
                                </Row>
                                <Row>
                                    <Col sm={12} xs={12} md={12} lg={4}>
                                        <Image src={carousel1} className="secondItemImage"/>
                                        <p>Click the ‘Live Chat’ button.</p>
                                    </Col>
                                    <Col sm={12} xs={12} md={12} lg={4}>
                                        <Image src={carousel2} className="secondItemImage"/>
                                        <p>Wait for your turn, you will be connected to a Listening Volunteer
                                            shortly.</p>
                                    </Col>
                                    <Col sm={12} xs={12} md={12} lg={4}>
                                        <Image src={carousel3} className="secondItemImage"/>
                                        <p>A chatroom will be opened when it reaches your turn.</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="carouselItem">
                        <div className="secondItemContainer">
                            <Container fluid style={{height: '100%'}}>
                                <Row>
                                    <Col sm={12} xs={12} md={12} lg={12}><h4
                                        className="berkshire-font mb-5">LineHayat Anonymous Call
                                        Service - How it
                                        Works?</h4></Col>
                                </Row>
                                <Row>
                                    <Col sm={12} xs={12} md={12} lg={4}>
                                        <Image src={carousel4} className="secondItemImage"/>
                                        <p>Click the 'Call Us’ button.</p>
                                    </Col>
                                    <Col sm={12} xs={12} md={12} lg={4}>
                                        <Image src={carousel5} className="secondItemImage"/>
                                        <p>Wait for your turn, you will
                                            be connected to a Listening
                                            Volunteer shortly.</p>
                                    </Col>
                                    <Col sm={12} xs={12} md={12} lg={4}>
                                        <Image src={carousel6} className="secondItemImage"/>
                                        <p>A free call will be automatically
                                            connected when it reaches your turn.</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Container style={{height: '100%', width: 'fit-content'}}>
                <Row style={{width: 'fit-content', marginRight: '0'}}>
                    <Col sm={12} xs={12} md={12} lg={6}>
                        <Button variant="primary" href="#/help" className="buttonHome">
                            <img src={chatIcon} className="homeButtonIcon"/>Live Chat
                        </Button>
                    </Col>
                    <Col sm={12} xs={12} md={12} lg={6}>
                        <Button variant="secondary" className="buttonHome" disabled="true" title="Call Service is not avaiable yet">
                            <img src={callIcon} className="homeButtonIcon"/> Call Us
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default HomeCarouselComponent;
