import React from "react";
import "./Secondary.css";

const Secondary = ({ BtnText, style }) => {
  return (
    <button className="Secondary_btn">
      {BtnText}
    </button>
  );
};

export default Secondary;
