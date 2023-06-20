import React from "react";
import "./Contact.css";
import "./ContactMd.css";
import { Icon } from "../../Constant/iconPath";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact_left">
          <div className="Number_secation">
            <img
              src={Icon.Phone_logo}
              alt="phone"
              className="Email_And_Phone"
            />
            <h4 className="media_info">86902-76136</h4>
          </div>
          <div className="Email_secation">
            <img src={Icon.Email_logo} alt="" className="Email_And_Phone" />
            <h4 className="media_info">Surajchhipa555@gmail.com</h4>
          </div>
        </div>
        <div className="contact_Right">
          <div className="media_logo_div">
            <img src={Icon.Facebook_logo} alt="" className="Media_logo" />
          </div>
          <div className="media_logo_div">
            <img src={Icon.Youtube_logo} alt="" className="Media_logo" />
          </div>
          <div className="media_logo_div">
            <img src={Icon.Google_logo} alt="" className="Media_logo" />
          </div>
          <div className="media_logo_div">
            <img src={Icon.Inst_logo} alt="" className="Media_logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
