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
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";

function HeaderComponent(props) {
  const languageContext = useContext(LanguageContext);
  const [expanded, setExpanded] = useState(false);
  return (
      <div>
              <Navbar bg={"light"} expand="md" fixed="top" className="justify-content-end" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
                <NavbarToggle aria-controls="basic-navbar-nav"/>
                <NavbarCollapse id="basic-navbar-nav">
                  <Nav className="mr-auto justify-content-end" onSelect={() => setExpanded(!expanded)}>
                    <NavLink href='/#'>{languageContext.content.header.home}</NavLink>
                    <NavLink href="/#faq">FAQ</NavLink>
                    <NavLink href="#/help">{languageContext.content.header.helped}</NavLink>
                    <NavDropdown title={languageContext.content.header.support} id="basic-nav-dropdown">
                      <NavDropdown.Item href='#/volunteer'>Become a Volunteer!</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Donate!</NavDropdown.Item>
                    </NavDropdown>
                    <NavLink href='#/team'>{languageContext.content.header.team}</NavLink>
                  </Nav>
                  <div className="horizontalCenter-sm">
                    <Form inline>
                      <Dropdown onSelect={() =>{props.updateLanguage();setExpanded(!expanded);}}>
                        <Dropdown.Toggle id="dropdown-basic" className="p-1">
                          {languageContext.language=='my' && <span className="flag-icon-my flag-icon flag mr-1"/>}
                          {languageContext.language=='en' && <span className="flag-icon-gb-eng flag-icon flag mr-1"/>}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          {languageContext.language=='my' && <Dropdown.Item><div className="flag-icon-gb-eng flag-icon flag"/></Dropdown.Item>}
                          {languageContext.language=='en' && <Dropdown.Item><div className="flag-icon-my flag-icon flag"/></Dropdown.Item>}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Form>
                  </div>
                </NavbarCollapse>
              </Navbar>
      </div>
  )
}

export default HeaderComponent;
