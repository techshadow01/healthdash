import React from "react";
import Activitychart from "../other/activitychart";
import "../../styles/DashboardMainContentcomponent/ActivityFeed.css";

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="header">
        <div className="title">Activity</div>
        <div className="subtitle">3 appointments on this Week</div>
      </div>
      <Activitychart />
      <div className="days-list">
        <div>mon</div>
        <div>tues</div>
        <div>wed</div>
        <div>thrus</div>
        <div>fri</div>
        <div>sat</div>
        <div>sun</div>
      </div>
    </div>
  );
};

export default ActivityFeed;
