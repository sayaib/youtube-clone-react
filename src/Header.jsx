import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt=""
        />
      </div>

      <div className="header_input">
        <input placeholder="Search" type="text" name="" id="" />
        <SearchIcon className="header_inputButton" />
        <MicRoundedIcon />
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar
          alt="Remy Sharp"
          src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2014/06/11/412919.gif?itok=ZXolMLj7"
        />
      </div>
    </div>
  );
}

export default Header;
