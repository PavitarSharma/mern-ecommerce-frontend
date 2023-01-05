import React from "react";
import "./Tooltip.css";
const Tooltip = ({ title, subTitle }) => {
  return (
    <>
      <div className="tooltip-top">
        {title}
        <span className="tooltiptext">{subTitle}</span>
      </div>
    </>
  );
};

export default Tooltip;
