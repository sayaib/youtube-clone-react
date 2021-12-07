import React from "react";
import "./VideoCard.css";
import Avatar from "@mui/material/Avatar";


function VideoCard({ img, title, avatar, channelName, views, postedTime }) {
  return (
    <div className="videoCard">
      <img className="thumbnailImage" src={img} alt="" />
      <div className="videoDetails">
        <Avatar src={avatar} />
        <div className="channelDetails">
          <h4>{title}</h4>
          <p>{channelName}</p>
          <p>
            {views}.{postedTime}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
