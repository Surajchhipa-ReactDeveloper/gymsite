import React from "react";
import "./FourIcon.css";
import "./FourIconMd.css";

const FourIcon = (props) => {
  return (
    <>
          <div className="Four_Icon_container">
          <div className="Left_Side_logo_FourIcon">
            <img src={props.IMG} alt="" className="FourIconImg " />
          </div>
          <div className="Right_Side_Text_FourIcon">
            <div className="Top_in_dights">{props.Digits}</div>
            <div className="bottom_in_Words">{props.About}</div>
          </div>
        </div>
    </>
  );
};

export default FourIcon;
