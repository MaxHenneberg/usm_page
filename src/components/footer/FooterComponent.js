import React, {useContext, useState} from "react";
import "flag-icon-css/css/flag-icon.css"
import "./FooterComponent.css"
import {LanguageContext} from "../../App";
import usmLogo from "../../contrib/usmLogo.png";
import Image from "react-bootstrap/Image";

function FooterComponent(props) {
  const languageContext = useContext(LanguageContext);
  return (
      <div className="footer">
        <div className="float-md-left footerItem">
          <div className="float-md-left">
            <h3>Address</h3>
          </div>
        </div>
        <div className="float-md-left footerItem">
          <div className="horizontalCenter w-fit-content">
            <h3 className="w-fit-content horizontalCenter">Follow Us</h3>
            <div>
              <i className="fa fa-facebook socialMediaIcon"/>
              <i className="fa fa-twitter socialMediaIcon"/>
              <i className="fa fa-instagram socialMediaIcon"/>
            </div>
            <div>Created by <a href="https://henneberg.io/#/" target="_blank" rel="noopener noreferrer" className="myLink">Max Henneberg</a></div>
          </div>
        </div>
        <div className="float-md-left h-100 footerItem">
          <div className="float-md-right h-100">
            <img src={usmLogo} className="usmLogo"/>
            <div>Impressum</div>
          </div>
        </div>
      </div>
  )
}

export default FooterComponent;
