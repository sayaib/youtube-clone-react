import React from "react";
import "./SideBar.css";
import SideBarCard from "./SideBarCard";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function SideBar() {
  return (
    <>
      <div className="sidebar">
        <SideBarCard Icon={HomeIcon} name="Home" />
        <SideBarCard Icon={ExploreIcon} name="Explore" />
        <SideBarCard Icon={SubscriptionsIcon} name="Subscriptions" />
        <hr
          style={{
            borderColor: "red",
          }}
        />
        <SideBarCard Icon={VideoLibraryIcon} name="Library" />
        <SideBarCard Icon={HistoryIcon} name="History" />
        <SideBarCard Icon={OndemandVideoIcon} name="Your Video" />
        <SideBarCard Icon={WatchLaterIcon} name="Watch Later" />
        <SideBarCard Icon={ThumbUpIcon} name="Your Like" />
        <SideBarCard Icon={KeyboardArrowDownIcon} name="Show More" />
        <hr
          style={{
            borderColor: "red",
          }}
        />
      </div>
    </>
  );
}

export default SideBar;
