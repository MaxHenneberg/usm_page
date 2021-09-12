import React, {useContext} from "react";
import CoverImageComponent from "../../coverimage/CoverImageComponent";
import AboutUsComponent from "../../aboutus/AboutUsComponent";
import "./HomeView.css";
import FAQComponent from "../../faq/FAQComponent";
import ContactComponent from "../../contact/ContactComponent";
import HomeCarouselComponent from "../../homeCarousel/HomeCarouselComponent";

function HomeView(props) {
    return (
        <div className="homeView">
            <HomeCarouselComponent/>
            <AboutUsComponent/>
            <ContactComponent/>
        </div>
    )
}

export default HomeView;
