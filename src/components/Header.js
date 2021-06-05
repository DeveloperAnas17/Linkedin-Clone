import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
          className="header__logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" className="header__searchInput" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="home" />
        <HeaderOption Icon={BusinessCenterIcon} title="home" />
        <HeaderOption Icon={ChatIcon} title="home" />
        <HeaderOption Icon={NotificationsIcon} title="home" />
        <HeaderOption
          avatar="https://yt3.ggpht.com/ytc/AAUvwnj0RZ4V5xQUonkbHHFEMa50ZIcQ5uCz0PEA-VU5naY=s48-c-k-c0x00ffffff-no-rj"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
