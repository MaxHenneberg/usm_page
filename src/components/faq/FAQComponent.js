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



function FAQComponent(props) {
  const languageContext = useContext(LanguageContext);
  let faq = faqJson.en;
  if (languageContext.language === 'my') {
    faq = faqJson.my;
  }
  return (
      <div className="mt-5 mb-3">
        <h1 id="faq">Frequently Asked Questions</h1>
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
              <h2>Questions by Supporters</h2>
              <FAQSection questions={faq.questions.volunteer}/>
            </div>
            <div className="mt-5">
              <p>Anything else to ask us? Do contact us <a href="" target="_blank"><span className="highlight">here</span></a> .</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FAQComponent;
