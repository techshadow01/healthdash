import React from "react";
import DashboardOverview from "./DashboardMainContentcomponent/DashboardOverview";
import CalendarView from "./DashboardMainContentcomponent/CalendarView";
import UpcomingSchedule from "./DashboardMainContentcomponent/UpcomingSchedule";
import ActivityFeed from "./DashboardMainContentcomponent/ActivityFeed";
import "../styles/DashboardMainContent.css";

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-container">
      <div className="dashboard-column">
        <DashboardOverview />
        <ActivityFeed />
      </div>
      <div className="dashboard-column calendar-section">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
