import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  const recentItem = (topic) => {
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>;
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Anas</h2>
        <h4>amanabbasi@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <p className="sidebar__statNumber">1010</p>
        </div>
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <p className="sidebar__statNumber">1010</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {/* {recentItem("reactJs")}
        {recentItem("programming")}
        {recentItem("python")}
        {recentItem("Javascript")}
        {recentItem("C++")} */}
        <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>Coding</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
