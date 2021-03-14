import React, {useContext} from "react";
import CoverImageComponent from "../../coverimage/CoverImageComponent";
import AboutUsComponent from "../../aboutus/AboutUsComponent";
import "./HomeView.css";
import FAQComponent from "../../faq/FAQComponent";

function HomeView(props) {
  return (
    <div>
      <CoverImageComponent/>
      <AboutUsComponent/>
      <FAQComponent/>
    </div>
  )
}

export default HomeView;
