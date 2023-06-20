import React from "react";
import "./BackText.css"
const BackText = (props) => {
  return (
    <>
      <div className="BackHeading_container">{props.BackText}</div>
    </>
  );
};

export default BackText;
