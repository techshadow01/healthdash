import React from "react";
import { healthdata } from "../../../data/healthdata";
import rarrow from "../../../assets/dashboardoverview/rarrow.svg";
import "../../../styles/DashboardMainContentcomponent/DashboardOverviewcomponents/HealthStatusCards.css";

const HealthStatusCards = () => {
  return (
    <div className="health-cards-container">
      {healthdata.map((item, index) => {
        return (
          <div key={index} className="health-card">
            <div className="health-card-header">
              <img className="health-card-icon" src={item.asset} alt="" />
              <div className="health-card-name">{item.name}</div>
            </div>
            <div className="health-card-date">Date: &nbsp;{item.date}</div>
            <div className="health-card-bar-bg">
              <div
                className={`health-card-bar ${item.color}`}
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        );
      })}
      <div className="health-card-footer">
        <div className="details-container">
          <div className="details-text">Details</div>
          <img className="details-arrow" src={rarrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HealthStatusCards;
