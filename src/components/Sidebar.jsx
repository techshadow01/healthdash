import React from "react";
import settings from "../assets/sidebar/settings.svg";
import { navigationlinks } from "../data/navigationlinks.jsx";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-background"></div>
      <div className="sidebar-content">
        <div className="sidebar-logo">
          <div className="logo-highlight">Health</div>
          <div className="logo-main">care.</div>
        </div>

        {navigationlinks.map((item, index) => {
          return (
            <div key={index} className="sidebar-section">
              <div className="section-title">{item.name}</div>
              <div className="section-links">
                {item.data.map((val, index1) => {
                  return (
                    <div key={index1} className="link-item">
                      <div>
                        <img src={val.asset} className="icon" alt="" />
                      </div>
                      <div
                        className={`link-label ${
                          val.name === "dashboard" ? "active-link" : ""
                        }`}
                      >
                        {val.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="sidebar-footer">
        <div>
          <img src={settings} className="settings-icon" alt="" />
        </div>
        <div className="settings-text">Settings</div>
      </div>
    </div>
  );
};

export default Sidebar;
