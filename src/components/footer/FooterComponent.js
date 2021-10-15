import React, {useContext, useState} from "react";
import "flag-icon-css/css/flag-icon.css"
import "./FooterComponent.css"
import {LanguageContext} from "../../App";
import usmLogo from "../../contrib/usmLogo.png";
import Image from "react-bootstrap/Image";
import logo from "../../contrib/lineHayatLogo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FooterComponent(props) {
  const languageContext = useContext(LanguageContext);
  return (
      <div className="footer">
        <div className="footerContent">
            <Row>
                <Col xs={12} sm={12} md={3} lg={3}>
                    <div className="ml-md-5">
                        <h4>LineHayat,</h4>
                        <p>Universiti Sains Malaysia, 11800,</p>
                        <p>Penang, Malaysia</p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div>
                        <img
                            src={logo}
                            width="100"
                            height="100"
                        />
                    </div>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3}>
                    <div>
                        <h4>E-mail:</h4>
                        <a href="mailto:linehayat@usm.my" target="_blank">
                            <p>linehayat@usm.my</p>
                        </a>
                        <h4>Last Updated:</h4>
                        <p>21/08/2021</p>
                    </div>
                </Col>
            </Row>
        </div>
        <div className="horizontalCenter">
            <p>Designed by <span className="footerHighlight">LineHayat D&M</span>; Developed by <a href="https://henneberg.io/#/" target="_blank" rel="noopener noreferrer" className="myLink"><span className="footerHighlight">Max Henneberg</span></a> & <span className="footerHighlight">Joo Hom</span></p>
        </div>
      </div>
  )
}

export default FooterComponent;
