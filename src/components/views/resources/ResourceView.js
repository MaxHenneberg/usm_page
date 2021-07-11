import "./ResourceView.css";
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import usmMain from "../../../contrib/usmMain.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import iContent from "../../../contrib/content/content";
import HelpLinesComponent from "../../helplines/HelplinesComponent";

function ResourceView(props) {
    const [selectedPage, setSelectedPage] = React.useState("helplines");

    return (
        <div>
            <Jumbotron style={{paddingBottom: '0'}}>
                <Container style={{height: '100%', width: 'fit-content'}}>
                    <Row style={{width: 'fit-content', marginRight: '0'}}>
                        <Col sm={12} xs={12} md={12} lg={6} className="displayFlexColumn justifyContentCenter">
                            <h2> Resources</h2>
                            <p>These are some useful resources (the latest news articles, LineHayat’s infographics, and other free mental health services in Malaysia),
                                which would help gain a better understanding of mental health and keep you updated with the services available in Malaysia.</p>
                        </Col>
                        <Col sm={12} xs={12} md={12} lg={6}>
                            <Image src={usmMain} className="resourceImage"/>
                        </Col>
                    </Row>
                </Container>
                <div className="displayFlexRow justifyContentBetween jumbotronButtonContainer">
                    <Button variant="light" className="jumbotronButton" onClick={() => setSelectedPage("helplines")}>Helplines</Button>
                    <Button variant="light" className="jumbotronButton" onClick={() => setSelectedPage("news")}>News</Button>
                    <Button variant="light" className="jumbotronButton" onClick={() => setSelectedPage("mediaResource")}>Media Resources</Button>
                </div>
            </Jumbotron>
            {selectedPage==="helplines" && <div><HelpLinesComponent/></div>}
            {selectedPage==="news" && <div>News coming soon !</div>}
            {selectedPage==="mediaResource" && <div>Media Resources coming soon!</div>}
        </div>
    )
}

export default ResourceView;
