import React from "react";
import SimpleAppointmentcard from "./SimpleAppointment/SimpleAppointmentCard";
import { appointments } from "../../data/appointments";
import "../../styles/DashboardMainContentcomponent/UpcomingSchedule.css";

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule-container">
      <div className="upcoming-schedule-title">The Upcoming Schedule</div>
      {appointments.map((item, index) => (
        <div key={index}>
          <div className="upcoming-schedule-day">On {item.day}</div>
          <div className="upcoming-schedule-appointments">
            {item.data.map((item1, index1) => (
              <SimpleAppointmentcard key={index1} data={item1} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
