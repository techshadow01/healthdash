import React from "react";
import Human from "../../../assets/dashboardoverview/human.png";
import Searchplus from "../../../assets/dashboardoverview/searchplus.svg";
import heart from "../../../assets/dashboardoverview/heart.svg";
import leg from "../../../assets/dashboardoverview/leg.svg";
import "../../../styles/DashboardMainContentcomponent/DashboardOverviewcomponents/AnatomySection.css";

const AnatomySection = () => {
  return (
    <div>
      <div className="anatomy-container">
        <img className="search-icon" src={Searchplus} alt="" />
        <div className="human-image-wrapper">
          <img src={Human} alt="" />
          <div className="tag healthy-heart">
            <img className="tag-icon" src={heart} alt="" />
            <div>Healthy Heart</div>
          </div>
          <div className="tag healthy-leg">
            <img className="tag-icon" src={leg} alt="" />
            <div>Healthy leg</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
