import React from "react";
import "./ProtinBox.css";
import "./ProtinBoxMd.css";
import { Images } from "../../Constant/imagePath";
import Primary from "../../Comman/PrimaryBtn/Primary";
import Fade from "react-reveal/Fade";

const ProteanBox = () => {
  return (
    <>
      <Fade bottom>
        <div className="Protean_Box_container">
          <div className="Protean_Box_Left_container">
            <div className="Protean_Title_And_Border Common_White_border_and_text_div">
              <div className="Protean_Title Common_white_Title">
                Anytime Energy
              </div>
              <div className="Protean_Title_border Common_white_Border"></div>
            </div>
            <div className="Protean_Description Common_White_Description">
              Optimum Nutrititon has one of the highest quality standards.Each
              drinks mixes up effortlessly with consistency goog taste , drinks
              after drink.
            </div>
            <div className="Protean_Btn Common_Transparent_Button">
              <Primary HowText="SHOP NOW" />
            </div>
          </div>
          <div className="Protean_Box_Right_container ">
            <div className="Protean_Box_Right_side ">
              <img src={Images.ProtinBIg} alt="" />
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default ProteanBox;
