import React, {useContext} from "react";
import {LanguageContext} from "../../../App";
import VolunteerSlide1 from "../../volunteerSlides/VolunteerSlide1";
import VolunteerSlide2 from "../../volunteerSlides/VolunteerSlide2";
import VolunteerSlide3 from "../../volunteerSlides/VolunteerSlide3";
import VolunteerSlide4 from "../../volunteerSlides/VolunteerSlide4";
import VolunteerSlide5 from "../../volunteerSlides/VolunteerSlide5";
function VolunteerView(props) {
  const languageContext = useContext(LanguageContext);
  return (
      <div>
        <VolunteerSlide1/>
        <VolunteerSlide2/>
        <VolunteerSlide3/>
        <VolunteerSlide4/>
        <VolunteerSlide5/>
      </div>
  )
}

export default VolunteerView;
