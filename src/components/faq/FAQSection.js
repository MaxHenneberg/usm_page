import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import React, {useContext, useState} from "react";
import "./FAQComponent.css"
import {useAccordionToggle} from "react-bootstrap";

const AccordionContext = React.createContext({
  currentEventKey: -1
});

function CustomToggle({children, eventKey, callback, className}) {
  const currentEventKey = useContext(AccordionContext);
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
      callback(eventKey)
  );

  return (
      <Accordion.Toggle as={Card.Header} eventKey={eventKey} onClick={decoratedOnClick} className={className}>
        {children}
      </Accordion.Toggle>
  );
}

function FAQSection(props) {
  const [accordionContext, setAccordionContext] = useState({currentEventKey: -1});

  const toggle = (key) => {
    if(accordionContext.currentEventKey === key){
      setAccordionContext({currentEventKey: -1});
    } else {
      setAccordionContext({currentEventKey: key});
    }
  };

  return (
      <AccordionContext.Provider value={accordionContext}>
        <Accordion>
          {props.questions.map((question, index) => {
            return (
                <Card className={accordionContext.currentEventKey===index.toString()?"selectedCard, faq-card":"notSelectedCard, faq-card"} key={index}>
                    <CustomToggle eventKey={index.toString()} callback={toggle} className={accordionContext.currentEventKey===index.toString()?"selectedCard":"notSelectedCard"}>
                      <h4 style={{float: "left", textAlign: 'left'}} className="question">{question.questionText}</h4>
                      {accordionContext.currentEventKey===index.toString() ? <i className="fas fa-chevron-down" style={{float: "right"}}/> : <i className="fas fa-chevron-left" style={{float: "right"}}/>}
                    </CustomToggle>
                  <Accordion.Collapse eventKey={index.toString()} style={{border: "none !important"}}>
                    <Card.Body style={{border: "none !important"}}>{question.answerText}</Card.Body>
                  </Accordion.Collapse>
                </Card>)
          })}
        </Accordion>
      </AccordionContext.Provider>
  )
}

export default FAQSection;
