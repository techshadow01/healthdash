import React from "react";
import AnatomySection from "./DashboardOverviewcomponents/AnatomySection";
import HealthStatusCards from "./DashboardOverviewcomponents/HealthStatusCards";
import V from "../../assets/dashboardoverview/v.svg";
import "../../styles/DashboardMainContentcomponent/DashboardOverview.css";

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview-container">
      <div className="dashboard-header">
        <div className="dashboard-title">Dashboard</div>
        <div className="dashboard-week-selector">
          <div className="dashboard-week-text">This Week</div>
          <img className="icon-size-3" src={V} alt="" />
        </div>
      </div>
      <div className="dashboard-main-content">
        <AnatomySection />
        <HealthStatusCards />
      </div>
    </div>
  );
};

export default DashboardOverview;
