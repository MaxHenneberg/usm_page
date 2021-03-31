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
        <div className="float-md-left footerItem mt-5 mt-md-3">
          <div className="float-md-left horizontalCenter">
            <h3>Address</h3>
          </div>
        </div>
        <div className="float-md-left footerItem mt-5 mt-md-3">
          <div className="horizontalCenter w-fit-content">
            <h3 className="w-fit-content horizontalCenter">Follow Us</h3>
            <div>
              <i className="fa fa-facebook fa-facebook-footer socialMediaIcon"/>
              <i className="fa fa-twitter fa-twitter-footer socialMediaIcon"/>
              <i className="fa fa-instagram fa-instagram-footer socialMediaIcon"/>
            </div>
          </div>
        </div>
        <div className="float-md-left h-100 footerItem mt-5 mt-md-3">
          <div className="float-md-right h-100 horizontalCenter">
            <img src={usmLogo} className="usmLogo"/>
            <div>Impressum</div>
          </div>
        </div>
        <div className="horizontalCenter">
          <div>Created by <a href="https://henneberg.io/#/" target="_blank" rel="noopener noreferrer" className="myLink">Max Henneberg</a></div>
        </div>
      </div>
  )
}

export default FooterComponent;
