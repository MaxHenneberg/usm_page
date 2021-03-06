import React, {useContext, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavLink from "react-bootstrap/NavLink";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";
import "flag-icon-css/css/flag-icon.css"
import "./HeaderComponent.css"
import {LanguageContext} from "../../App";

function HeaderComponent(props) {
  const languageContext = useContext(LanguageContext);
  return (
      <div>
              <Navbar bg={"light"}>
                <NavbarToggle aria-controls="basic-navbar-nav"/>
                <NavbarCollapse id="basic-navbar-nav" className="justify-content-end">
                  <NavLink href='#/'>{languageContext.content.header.home}</NavLink>
                  <NavLink href="#/help">{languageContext.content.header.helped}</NavLink>
                  <NavDropdown title={languageContext.content.header.support} id="basic-nav-dropdown">
                    <NavDropdown.Item href='#/volunteer'>Become a Volunteer!</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Donate!</NavDropdown.Item>
                  </NavDropdown>
                  <NavLink href='#/team'>{languageContext.content.header.team}</NavLink>
                </NavbarCollapse>
                <Form inline>
                  <div>
                    <i className="flag-icon-my flag-icon float-left vertical-center"/>
                    <FormCheck type="switch" id="custom-switch" className="float-left" onChange={() =>{props.updateLanguage()}} checked={languageContext.language !== 'my'}/>
                    <i className="flag-icon-gb-eng flag-icon float-left vertical-center"/>
                  </div>
                </Form>
              </Navbar>
      </div>
  )
}

export default HeaderComponent;
