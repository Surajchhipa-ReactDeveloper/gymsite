import React from "react";
import "./FourIcon.css";
import "./FourIconMd.css";
import Fade from "react-reveal/Fade";

const FourIcon = (props) => {
  return (
    <>
      <Fade bottom >
          <div className="Four_Icon_container">
          <div className="Left_Side_logo_FourIcon">
            <img src={props.IMG} alt="" className="FourIconImg " />
          </div>
          <div className="Right_Side_Text_FourIcon">
            <div className="Top_in_dights">{props.Digits}</div>
            <div className="bottom_in_Words">{props.About}</div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default FourIcon;
