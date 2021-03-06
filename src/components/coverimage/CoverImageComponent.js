import React, {useContext} from "react";
import {LanguageContext} from "../../App";
import Image from "react-bootstrap/Image";
import usmMain from "../../contrib/usmMain.jpg";
import Button from "react-bootstrap/Button";
import "./CoverImageComponent.css";
import {Link} from "react-router-dom";

function CoverImageComponent(props) {
  const languageContext = useContext(LanguageContext);
  return (
      <div className="mainImage">
        <Image src={usmMain} width="100%" height="100%"/>
        <div className="hoverContent">
          <div dangerouslySetInnerHTML={{__html:languageContext.content.home.info}} className="infoContainer">
          </div>
          <div className="buttonContainer">
            <Link to='/help'>
              <Button variant="primary" className="float-md-left">{languageContext.content.home.imsg}</Button>
            </Link>
            <Link to='aboutus'>
              <Button variant="secondary" className="float-md-left">{languageContext.content.home.aboutUs}</Button>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default CoverImageComponent;
