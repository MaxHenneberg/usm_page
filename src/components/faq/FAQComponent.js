import React, {useContext, useState} from "react";
import "flag-icon-css/css/flag-icon.css"
import "./FAQComponent.css"
import {LanguageContext} from "../../App";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import faqJson from "../../contrib/content/faq.json";
import {useAccordionToggle} from "react-bootstrap";
import iContent from "../../contrib/content/content";
import FAQSection from "./FAQSection";
import {NavLink} from "react-router-dom";



function FAQComponent(props) {
  const languageContext = useContext(LanguageContext);
  let faq = faqJson.en;
  if (languageContext.language === 'my') {
    faq = faqJson.my;
  }
  return (
      <div className="mt-5 mb-3">
        <h2 id="faq">Frequently Asked Questions</h2>
        <div className="horizontalCenter">
          <div className="questionSection">
            <div className="mt-5">
            <h2>General Questions</h2>
            <FAQSection questions={faq.questions.general}/>
            </div>
            <div className="mt-5">
              <h2>Questions by Sharers</h2>
              <FAQSection questions={faq.questions.sharer}/>
            </div>
            <div className="mt-5">
              <h2>Questions by Listening Volunteers</h2>
              <FAQSection questions={faq.questions.volunteer}/>
            </div>
            <div className="mt-5">
              <h2>Questions by LineHayat Community</h2>
              <FAQSection questions={faq.questions.supporters}/>
            </div>
            <div className="mt-5">
              <p>Anything else to ask us? Do contact us <NavLink to="/contacts"><span className="highlight">here</span></NavLink>.</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FAQComponent;
