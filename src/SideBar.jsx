import React from "react";
import "./SideBar.css";
import SideBarCard from "./SideBarCard";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

function SideBar() {
  return (
    <div className="sidebar">
      <SideBarCard Icon={HomeIcon} name="Home" />
      <SideBarCard Icon={ExploreIcon} name="Explore" />
      <SideBarCard Icon={SubscriptionsIcon} name="Subscriptions" />
      <hr />
    </div>
  );
}

export default SideBar;
