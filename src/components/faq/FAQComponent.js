import React, {useContext, useState} from "react";
import "flag-icon-css/css/flag-icon.css"
import "./FAQComponent.css"
import {LanguageContext} from "../../App";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import faqJson from "./contrib/faq.json";

function FAQComponent(props) {
  const languageContext = useContext(LanguageContext);
  let faq = faqJson.en;
  if (languageContext.language === 'my') {
    faq = faqJson.my;
  }
  return (
      <div className="mt-5 mb-3" id="faq">
        <h1>FAQ</h1>
        <Accordion>
          {faq.questions.map((question, index) => {
            return (
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
                      {question.questionText}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body>{question.answerText}</Card.Body>
                  </Accordion.Collapse>
                </Card>)
          })}
        </Accordion>

      </div>
  )
}

export default FAQComponent;
