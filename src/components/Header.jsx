import React from "react";
import Noti from "../assets/header/notification.svg";
import search from "../assets/header/search.svg";
import add from "../assets/header/add.svg";
import avatar from "../assets/header/avatar.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="search-bar">
        <div className="search-input">
          <img src={search} className="icon-small" alt="" />
          <input type="text" placeholder="Search" className="search-field" />
        </div>
        <img src={Noti} className="icon-medium" alt="" />
      </div>
      <div className="header-spacer"></div>
      <div className="user-actions">
        <img src={avatar} className="avatar" alt="" />
        <img src={add} className="add-icon" alt="" />
      </div>
    </div>
  );
};

export default Header;
