import React, {useContext} from "react";
import {LanguageContext} from "../../../App";
function VolunteerView(props) {
  const languageContext = useContext(LanguageContext);
  return (
      <div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdyPtOfIKj6rVI0eUY9l4j5_ZYR6APHTrT5uLpD7e6zHLYQIQ/viewform?embedded=true" width="640" height="390" frameBorder="0"
                marginHeight="0" marginWidth="0">Wird geladen…
        </iframe>
      </div>
  )
}

export default VolunteerView;
