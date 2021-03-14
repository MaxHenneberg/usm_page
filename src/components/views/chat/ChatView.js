import React, {useContext, useState} from "react";
import "flag-icon-css/css/flag-icon.css"
import "./ChatView.css"
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import chatJson from "./contrib/chat"
import {LanguageContext} from "../../../App";

function ChatView(props) {
  const languageContext = useContext(LanguageContext);
  const [show, setShow] = useState(true);
  let chat = chatJson.en;
  if (languageContext.language === 'my') {
    chat = chatJson.my;
  }

  return (
      <div>
        <Modal backdrop="static" show={show} onHide={() => setShow(false)}>
          <Modal.Header>
            <Modal.Title>{chat.modal.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {chat.modal.rules.map((rule) => {
              return(
                  <p>{rule}</p>
              )
            })}
            <p>{chat.modal.text}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setShow(false)}>{chat.modal.footer.primaryButton}</Button>
          </Modal.Footer>
        </Modal>
        <div className="mt-">
          <iframe src='https://deadsimplechat.com/OZCgJ4twA' width='100%' height='600px'></iframe>
        </div>
      </div>
  )
}

export default ChatView;
