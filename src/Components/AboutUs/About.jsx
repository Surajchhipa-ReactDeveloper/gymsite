import React from "react";
import "./About.css";
import "./AboutMd.css";
import { Icon } from "../../Constant/iconPath";
const About = () => {
  return (
    <>
        <div className=" About_US_Section about" id="about">
          <div className="About_Left_section">
            <div className="About_Left_section_text_top">
              <div className="About_us_Heading All__container_common_title_top">
                ABOUT US
              </div>
              <div className="About_us_Title_AND_Orange_border Common_TiTle_and_Orange_border">
                <div className="About_Title Common_text_heading">
                  Who Are We
                </div>
                <div className="About_Border Common_text_border"></div>
              </div>
              <div className="About_us_description Common_Description_for_all_container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitati Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Adipisci ratione animi
                earum nemo tempora voluptatem itaque exercitationem dolorem
                neque molestiae, mollitia inventore nam iste illum nostrum, modi
                libero, totam eveniet?
              </div>
            </div>
            <div className="About_Left_section_text_bottom">
              <div className="First_Fitness">
                <div className="Fitness_logo">
                  <img src={Icon.Situp_logo} alt="" />
                </div>
                <div className="Fitness_text">
                  <div className="Fitness_Text_Title">Fitness Exercise</div>
                  <div className="Fitness_Text_Description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
              <div className="First_Fitness">
                <div className="Fitness_logo">
                  <img src={Icon.WorkMachine_logo} alt="" />
                </div>
                <div className="Fitness_text">
                  <div className="Fitness_Text_Title">Cardio Training</div>
                  <div className="Fitness_Text_Description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="About_Right_section">
            <div className="About_us_left_backGround_img">
              {/* <img src={Images.WiHu_background} alt="" className="First_img "/> */}
            </div>
            <div className="About_us_left_BackGround_Upper_img">
              {/* <img src={Images.Wife_husband} alt="" className="Second_img"/> */}
            </div>
          </div>
        </div>
    </>
  );
};

export default About;
