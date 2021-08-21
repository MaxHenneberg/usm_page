import React, {useContext, useState} from "react";
import "flag-icon-css/css/flag-icon.css"
import "./FooterComponent.css"
import {LanguageContext} from "../../App";
import usmLogo from "../../contrib/usmLogo.png";
import Image from "react-bootstrap/Image";
import logo from "../../contrib/lineHayatLogo.png";

function FooterComponent(props) {
  const languageContext = useContext(LanguageContext);
  return (
      <div className="footer">
        <div className="footerContent">
            <div>
                <h4>LineHayat,</h4>
                <p>Universiti Sains Malaysia, 11800,</p>
                <p>Penang, Malaysia</p>
            </div>
            <div>
                <img
                    src={logo}
                    width="100"
                    height="100"
                />
            </div>
            <div>
                <h4>E-mail:</h4>
                <a href="mailto:linehayat@usm.my" target="_blank">
                    <span>linehayat@usm.my</span>
                </a>
                <h4>Last Updated:</h4>
                <p>21/08/2021</p>
            </div>
        </div>
        <div className="horizontalCenter">
          <div>Created by <a href="https://henneberg.io/#/" target="_blank" rel="noopener noreferrer" className="myLink">Max Henneberg</a></div>
        </div>
      </div>
  )
}

export default FooterComponent;
