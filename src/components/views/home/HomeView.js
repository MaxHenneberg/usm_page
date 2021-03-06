import React, {useContext} from "react";
import CoverImageComponent from "../../coverimage/CoverImageComponent";
import AboutUsComponent from "../../aboutus/AboutUsComponent";
import "./HomeView.css";

function HomeView(props) {
  return (
    <div>
      <CoverImageComponent/>
      <AboutUsComponent/>
    </div>
  )
}

export default HomeView;
