import React from "react";
import "../../styles/other/calendercomp.css";

const days = [
  { name: "Mon", date: 25, times: ["10:00", "11:00", "12:00"] },
  { name: "Tues", date: 26, times: ["8:00", "9:00", "10:00"], highlight: [1] },
  { name: "Wed", date: 27, times: ["12:00", "---", "13:00"] },
  {
    name: "Thu",
    date: 28,
    times: ["10:00", "11:00", "---"],
    highlight: [1],
    highlightColor: "#DDE2F9",
  },
  { name: "Fri", date: 29, times: ["---", "14:00", "16:00"] },
  {
    name: "Sat",
    date: 30,
    times: ["12:00", "14:00", "15:00"],
    highlight: [0],
    highlightColor: "#DDE2F9",
    rounded: "left",
  },
  {
    name: "Sun",
    date: 31,
    times: ["9:00", "10:00", "11:00"],
    highlight: [0],
    rounded: "right",
    textColor: "text-slate-400",
    highlightColor: "#DDE2F9",
  },
];

const CalendarComp = () => {
  return (
    <div className="calendar-container">
      {days.map((day, i) => (
        <div
          key={i}
          className={`calendar-day ${day.textColor || "text-default"} ${
            day.highlight ? "rounded-xl" : ""
          } ${day.date === 26 ? "bg-highlight" : ""}`}
        >
          <div className="calendar-day-header">
            <div>{day.name}</div>
            <div className="calendar-day-date">{day.date}</div>
          </div>
          <div className="calendar-day-times">
            {day.times.map((time, j) => {
              const isHighlighted = day.highlight?.includes(j);
              const highlightColor = day.highlightColor || "#3734A9";
              const roundedClass =
                day.rounded === "left"
                  ? "highlight-left"
                  : day.rounded === "right"
                  ? "highlight-right"
                  : "highlight-default";

              return (
                <div
                  key={j}
                  className={`calendar-time ${isHighlighted ? "white" : ""}`}
                >
                  {isHighlighted && day.date !== 26 && (
                    <div className="highlight-dot"></div>
                  )}
                  {isHighlighted && (
                    <div
                      className={`highlight-bg ${roundedClass}`}
                      style={{ backgroundColor: highlightColor }}
                    ></div>
                  )}
                  {time}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarComp;
