import React from "react";
import "./Footer.css";
import "./FooterMd.css";
import { Icon } from "../../Constant/iconPath";
import Cate from "../../Comman/Catagary/Cate";
import Fade from "react-reveal/Fade";

const FOOTER = () => {
  return (
    <>
      <Fade bottom>
        <div className="Footer_Container faq" id="faq">
          <div className="Footer_box1">
            <div className="Gym_Logo">
              <img src={Icon.GYM_Logo} alt="" />
            </div>
            <div className="Gym_Adders_and_logo Display">
              <div className="Home_logo">
                <img src={Icon.Phone_Red_logo} alt="" />
              </div>
              <div className="Adders">
                C-73 Bhilwara Rajsthan Kheda Khut Mata JBhilwara Rajsthan Kheda
                Khut Mata Ji K Pass
              </div>
            </div>
            <div className="Gym_Coll_and_Logo Display">
              <div className="Home_logo">
                <img src={Icon.Location_logo} alt="" />
              </div>
              <div className="Number_developer">014172214</div>
            </div>
            <div className="Gym_Media_logo">
              <img src={Icon.LINKDAN_logo} alt="" />
              <img src={Icon.Tweeter_logo} alt="" />
              <img src={Icon.FaceBookRed_logo} alt="" />
            </div>
          </div>
          <div className="Footer_box2 FooCoBox">
            <div className="Footer_box_Heading"> Category</div>
            <div className="Footer_box_Item">
              <Cate />
            </div>
          </div>
          <div className="Footer_box3 FooCoBox">
            <div className="Footer_box_Heading "> Category</div>
            <div className="Footer_box_Heading">
              <Cate />
            </div>
          </div>
          <div className="Footer_box3 FooCoBox">
            <div className="Footer_box_Heading "> Category</div>
            <div className="Footer_box_Heading">
              <Cate />
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default FOOTER;
