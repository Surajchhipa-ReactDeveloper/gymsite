import React from "react";
import "./RedBar.css";
import "./RadBarMd.css";
import { Images } from "../../Constant/imagePath";
import Primary from "../../Comman/PrimaryBtn/Primary";

const RedBar = (props) => {
  return (
    <>
        <div className="RadBar_container_position">
          <div className="RadBar_container">
            <div className="RadBar_Left_Side">
              <img src={Images.Title_img} alt="" />
            </div>
            <div className="RadBar_Right_Side">
              <div className="RedBar_Title_And_Border Common_White_border_and_text_div">
                <div className="RedBar_Title Common_white_Title">
                  Title here
                </div>
                <div className="RedBar_Title_border Common_white_Border"></div>
              </div>
              <div className="RedBar_Description Common_White_Description">
                {/* {props.Description} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi iusto neque quibusdam mollitia a doloremque ipsam mm
              </div>
              <div className="RedBar_Btn Common_Transparent_Button">
                <Primary HowText="READ MORE" />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default RedBar;
