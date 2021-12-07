import React from "react";
import "./SideBarCard.css";

function SideBarCard(prop) {
  return (
    <div className="cardComponent">
      <prop.Icon className="sidebar_icon" />

      <h3 className="sidebar_title">{prop.name}</h3>
    </div>
  );
}

export default SideBarCard;
