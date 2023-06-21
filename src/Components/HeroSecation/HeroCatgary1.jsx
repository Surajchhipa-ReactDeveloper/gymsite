import React from "react";
import "./HeroCatgary.css";
import "./HeroCatgaryMd.css";
import { Icon } from "../../Constant/iconPath";


const HeroCategory1 = () => {
  return (
    <>
        <div className="Hero_category1">
          <div className="Category1 Category_Common">
            <div className="Category_img">
              <img src={Icon.Clock_logo} alt="" />
            </div>
            <div className="Category_Type1 Category_type_Common">
              PROGRESSION
            </div>
            <div className="Category_text1 Category_text_common">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur sint commodi minus, saepe aut ipsa quasi neque e
              dolores temporibus. Doloremque.
            </div>
          </div>
          <div className="Background_img1 Background_img_Common ">
            <img src={Icon.Clock_logo} alt="" />
          </div>
        </div>
    </>
  );
};

export default HeroCategory1;
