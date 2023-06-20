import React from "react";
import "./Form.css";
import "./FormMd.css";
import Primary from "../../Comman/PrimaryBtn/Primary";
import Fade from "react-reveal/Fade";

const Form = () => {
  return (
    <>
      <Fade bottom>
        <div className="User_Form Contact" id="Contact">
          <div className="User_Form_Left_Container">
            <div className="User_Form_top_Heading">LETS START!</div>
            <div className="User_Form_Title">SUBSCRIBE TO OUR NEWSLETTER</div>
            <div className="User_Form_Dec">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </div>
          </div>
          <div className="User_Form_Right_Container">
            <form>
              <div className="NAME">
                <input type="text" placeholder="Name" />
              </div>
              <div className="Email">
                <input type="email" placeholder="Email" />
              </div>
            </form>
            <div className="Subscribe_Btn">
              <Primary HowText="SUBSCRIBE" />
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Form;
