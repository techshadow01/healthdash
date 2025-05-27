import React from "react";
import "../../../styles/DashboardMainContentcomponent/SimpleAppointment/SimpleAppointmentCard.css";

const SimpleAppointmentCard = ({ data }) => {
  return (
    <div className="simple-appointment-card-container">
      <div className="simple-appointment-card">
        <div className="simple-appointment-card-header">
          <div className="simple-appointment-task">{data.task}</div>
          <img className="simple-appointment-img" src={data.asset} alt="" />
        </div>
        <div className="simple-appointment-time">{data.time}</div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
