import React from "react";
import "./RecommendVideos.css";
import VideoCard from "./VideoCard";

function RecommendVideos() {
  return (
    <div className="recommendVideos">
      <h1>Recommended</h1>
      <div className="recommendVideos_video">

        <VideoCard
        img="https://www.91-cdn.com/hub/wp-content/uploads/2021/03/YouTube-Thumbnail-maker.jpeg" 
        avatar="https://scontent.fccu20-1.fna.fbcdn.net/v/t1.6435-1/s200x200/151118557_2838457176402744_6982790705069458652_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=0An3QqzYxeMAX9_PaJO&_nc_ht=scontent.fccu20-1.fna&oh=9dfa5750e47dbadf12357f929b4e1978&oe=61D52C77" 
        title="How to create youtube videos details with proper explanation."
        channelName="Sayaib Sarkar"
        views="2.1M views"
        postedTime="11 days ago"
        />
      </div>
    </div>
  );
}

export default RecommendVideos;
