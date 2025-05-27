import React from "react";
import { calenderdata } from "../../data/calender";
import larrow from "../../assets/calender/larrow.svg";
import rarrow from "../../assets/calender/rarrow.svg";
import Calendercomp from "../other/calendercomp";
import "../../styles/DashboardMainContentcomponent/CalendarView.css";

const Card = ({ data }) => {
  return (
    <div className="card-container">
      <div className={`card ${data.textcolor} ${data.bgcolor}`}>
        <div className="card-header">
          <div className="card-title">{data.title}</div>
          <img className="icon-size-5" src={data.asset} alt="" />
        </div>
        <div className="card-content">
          <div>{data.time}</div>
          <div>{data.name}</div>
        </div>
      </div>
    </div>
  );
};

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <div className="calendar-month">October 2021</div>
        <div className="calendar-nav">
          <img className="icon-size-5" src={larrow} alt="" />
          <img className="icon-size-5" src={rarrow} alt="" />
        </div>
      </div>
      <div>
        <Calendercomp />
      </div>
      <div className="cards-row">
        {calenderdata.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default CalendarView;
